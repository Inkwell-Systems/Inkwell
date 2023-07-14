import {IResult} from '../../../types/IResult.ts';
import IProject from '../../../types/IProject.ts';
import {get, ref} from 'firebase/database';
import {Database} from '../index.ts';
import IUser from '../../../types/IUser.ts';

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

        const project: IProject = {
            cloud: true,
            entryMap: snapshot.val().entryMap,
            scopes: snapshot.val().scopes,
            projectBanner: snapshot.val().projectBanner,
            projectId: snapshot.val().projectId,
            projectName: snapshot.val().projectName,
            projectDescription: snapshot.val().projectDescription,
            projectCreatedAt: snapshot.val().projectCreatedAt,
            tables: snapshot.val().tables,
            owner: snapshot.val().owner,
            members: snapshot.val().members,
        };

        if (project.entryMap === undefined) project.entryMap = {};
        if (project.members === undefined) project.members = [];
        if (project.tables === undefined) project.tables = [];

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
