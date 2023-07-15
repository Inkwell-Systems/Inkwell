import {IResult} from '../../../types/IResult.ts';
import {
    FetchProject,
    FetchUserProjectsFromDatabase,
} from './fetch-project.db.ts';
import {ref, update} from 'firebase/database';
import {Database} from '../../index.ts';

export const RemoveUserFromProject = async (
    projectId: string,
    userId: string,
): Promise<IResult<null>> => {
    try {
        const projRes = await FetchProject(projectId);
        if (projRes.error) {
            console.log(
                `Error fetching project ${projectId} to remove user ${userId}. (RemoveUserFromProject)`,
            );
            console.error(projRes.error);

            return {
                data: null,
                error: projRes.error,
            };
        }

        if (userId === projRes.data.owner) {
            console.log(
                `Attempted to remove owner ${userId} from project ${projectId}. Aborting (RemoveUserFromProject)`,
            );
            return {
                data: null,
                error: new Error(
                    `Attempted to remove owner ${userId} from project ${projectId}. (RemoveUserFromProject)`,
                ),
            };
        }

        if (!projRes.data.members.includes(userId)) {
            console.log(
                `Attempted to remove user ${userId} from project ${projectId} but they are not a member. Aborting (RemoveUserFromProject)`,
            );
            return {
                data: null,
                error: new Error(
                    `Attempted to remove user ${userId} from project ${projectId} but they are not a member. (RemoveUserFromProject)`,
                ),
            };
        }

        const userProjectsRes = await FetchUserProjectsFromDatabase(userId);
        if (userProjectsRes.error) {
            console.log(
                `Error fetching user ${userId} projects. (RemoveUserFromProject)`,
            );
            console.error(userProjectsRes.error);

            return {
                data: null,
                error: userProjectsRes.error,
            };
        }

        await update(ref(Database, `projects/${projectId}`), {
            members: projRes.data.members.filter(
                (member: string) => member !== userId,
            ),
        });

        await update(ref(Database, `users/${userId}`), {
            projects: userProjectsRes.data.filter(
                project => project.projectId !== projectId,
            ),
        });

        console.log(
            `Removed user ${userId} from project ${projectId}. (RemoveUserFromProject)`,
        );
        return {
            data: null,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error removing user ${userId} from project ${projectId}. (RemoveUserFromProject)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
