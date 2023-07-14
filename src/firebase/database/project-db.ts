import {IResult} from '../../types/IResult.ts';
import IProject from '../../types/IProject.ts';
import {push, ref, set, get} from 'firebase/database';
import {Database} from './init.ts';
import IUser from '../../types/IUser.ts';

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
            projectBanner: snapshot.val().projectBanner,
            projectId: snapshot.val().projectId,
            projectName: snapshot.val().projectName,
            projectDescription: snapshot.val().projectDescription,
            projectCreatedAt: snapshot.val().projectCreatedAt,
            tables: snapshot.val().tables,
            owner: snapshot.val().owner,
            members: snapshot.val().members,
        };

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

export const CreateProjectInDatabase = async (
    title: string,
    description: string,
    owner: IUser,
): Promise<IResult<IProject>> => {
    try {
        const result = await push(ref(Database, `projects/`));

        const proj = {
            projectId: result.key,
            projectName: title,
            projectDescription: description,
            projectCreatedAt: Date.now(),
            tables: [],
            owner: owner.id,
            members: [],
        };

        await set(ref(Database, `projects/${result.key}`), proj);
        await set(ref(Database, `users/${owner.id}/projects`), [result.key]);

        console.log(
            `Created project ${result.key} in database. (CreateProjectInDatabase)`,
        );

        return {
            data: {
                cloud: true,
                projectBanner:
                    'https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
                ...proj,
            },
            error: null,
        };
    } catch (error) {
        console.log(
            `Failed to create project in database. (CreateProjectInDatabase)\n ${error}`,
        );

        return {
            data: null,
            error: error,
        };
    }
};
