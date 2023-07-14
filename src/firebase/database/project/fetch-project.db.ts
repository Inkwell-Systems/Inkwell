import {IResult} from '../../../types/IResult.ts';
import IProject from '../../../types/IProject.ts';
import {get, ref} from 'firebase/database';
import IUser from '../../../types/IUser.ts';
import {Database, DatabaseProjectToIProject} from '../../index.ts';

export const FetchProjectFromDatabase = async (
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
            const result = await FetchProjectFromDatabase(projectId);
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
