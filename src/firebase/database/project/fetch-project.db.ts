import {IResult} from '../../../types/IResult.ts';
import IProject from '../../../types/IProject.ts';
import {get, ref} from 'firebase/database';
import IUser from '../../../types/IUser.ts';
import {Database, DatabaseProjectToIProject} from '../../index.ts';

export const FetchProject = async (
    projectId: string,
): Promise<IResult<IProject>> => {
    try {
        const snapshot = await get(ref(Database, `projects/${projectId}`));
        if (!snapshot.exists()) {
            return {
                data: null,
                error: new Error('Project does not exist.'),
            };
        }

        const project = DatabaseProjectToIProject(snapshot);

        return {
            data: project,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error,
        };
    }
};

export const FetchUserProjectsFromDatabase = async (
    user: IUser,
): Promise<IResult<IProject[]>> => {
    try {
        const snapshot = await get(ref(Database, `users/${user.id}/projects`));
        if (!snapshot.exists()) {
            return {
                data: [],
                error: null,
            };
        }

        const projects: IProject[] = [];
        for (const projectId of snapshot.val()) {
            const result = await FetchProject(projectId);

            if (!result.error) {
                projects.push(result.data);
            }
        }

        console.log(
            `Fetched ${projects.length} projects from database. (FetchUserProjectsFromDatabase)`,
        );

        return {
            data: projects,
            error: null,
        };
    } catch (error) {
        console.log(
            `Failed to fetch user projects from database. (FetchUserProjectsFromDatabase)\n ${error}`,
        );

        return {
            data: null,
            error: error,
        };
    }
};

export const FetchProjectInviteLink = async (
    projectId: string,
    inviteCode: string,
): Promise<IResult<IProject>> => {
    try {
        const projRes = await FetchProject(projectId);
        if (projRes.error) {
            console.log(
                `Error fetching project ${projectId} from database. (FetchProjectInviteLink)`,
            );
            console.error(projRes.error);

            return {
                data: null,
                error: projRes.error,
            };
        }

        if (projRes.data.inviteCode !== inviteCode) {
            console.log(
                `Invalid invite code for project ${projectId}. (FetchProjectInviteLink)`,
            );

            return {
                data: null,
                error: new Error(
                    `Invalid invite code for project ${projectId}.`,
                ),
            };
        }

        return {
            data: projRes.data,
            error: null,
        };
    } catch (error) {
        console.log(
            `Failed to fetch project invite link from database. (FetchProjectInviteLink)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
