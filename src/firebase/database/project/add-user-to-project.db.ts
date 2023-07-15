import {IResult} from '../../../types/IResult.ts';
import {
    FetchProject,
    FetchUserProjectsFromDatabase,
} from './fetch-project.db.ts';
import {Database} from '../../index.ts';
import {ref, update} from 'firebase/database';

export const AddUserToProject = async (
    userId: string,
    projectId: string,
): Promise<IResult<null>> => {
    try {
        // Add user to project
        const projRes = await FetchProject(projectId);
        if (projRes.error) {
            console.log(
                `Error fetching project ${projectId} from database. (AddUserToProject)`,
            );
            console.error(projRes.error);

            return {
                data: null,
                error: projRes.error,
            };
        }

        if (projRes.data.members.includes(userId)) {
            console.log(
                `User ${userId} is already a member of project ${projectId}. (AddUserToProject)`,
            );
            return {
                data: null,
                error: new Error(
                    `User ${userId} is already a member of project ${projectId}.`,
                ),
            };
        }

        await update(ref(Database, `projects/${projectId}`), {
            members: [...projRes.data.members, userId],
        });

        // Get user's projects
        const userRes = await FetchUserProjectsFromDatabase(userId);
        if (userRes.error) {
            console.log(
                `Error fetching projects for user ${userId} from database. (AddUserToProject)`,
            );
            console.error(userRes.error);

            return {
                data: null,
                error: userRes.error,
            };
        }

        await update(ref(Database, `users/${userId}`), {
            projects: [...userRes.data, projectId],
        });

        return {
            data: null,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error adding user ${userId} to project ${projectId}. (AddUserToProject)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
