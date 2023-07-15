import IUser from '../../../types/IUser.ts';
import {IResult} from '../../../types/IResult.ts';
import IProject, {GenerateProjectId} from '../../../types/IProject.ts';
import {get, push, ref, set} from 'firebase/database';
import {IScopeHierarchy} from '../../../types/IScope.ts';
import {Database} from '../../index.ts';
import ITable from '../../../types/ITable.ts';

// TODO(calco)
export const CreateProjectInDatabase = async (
    title: string,
    description: string,
    owner: IUser,
    scopes: IScopeHierarchy,
    tables: {[key: number]: ITable},
): Promise<IResult<IProject>> => {
    try {
        const result = await push(ref(Database, `projects/`));

        const proj = {
            projectId: result.key,
            projectBanner:
                'https://images.unsplash.com/photo-1460411794035-42aac080490a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            scopes: scopes,
            projectName: title,
            projectDescription: description,
            projectCreatedAt: Date.now(),
            entryMap: {},
            tables: tables,
            owner: owner.id,
            members: [],
            inviteCode: GenerateProjectId(),
        };

        await set(ref(Database, `projects/${result.key}`), proj);

        const userSnapshot = await get(ref(Database, `users/${owner.id}`));

        // TODO(calco): Requires refactor.
        if (
            userSnapshot.exists() &&
            userSnapshot.val().projects !== undefined
        ) {
            const projects = userSnapshot.val().projects;

            await set(ref(Database, `users/${owner.id}/projects`), [
                ...projects,
                result.key,
            ]);
        } else {
            await set(ref(Database, `users/${owner.id}/projects`), [
                result.key,
            ]);
        }

        console.log(
            `Created project ${result.key} in database. (CreateProjectInDatabase)`,
        );

        return {
            data: {
                cloud: true,
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
