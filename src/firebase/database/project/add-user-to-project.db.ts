import {IResult} from '../../../types/IResult.ts';
import IUser from '../../../types/IUser.ts';
import {FetchProject} from './fetch-project.db.ts';
import {Database} from '../../index.ts';
import {ref, update} from 'firebase/database';

export const AddUserToProject = async (
    user: IUser,
    projectId: string,
): Promise<IResult<null>> => {
    try {
        console.log(user);

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

        if (projRes.data.members.includes(user.id)) {
            console.log(
                `User ${user.id} is already a member of project ${projectId}. (AddUserToProject)`,
            );
            return {
                data: null,
                error: new Error(
                    `User ${user.id} is already a member of project ${projectId}.`,
                ),
            };
        }

        await update(ref(Database, `projects/${projectId}`), {
            members: [...projRes.data.members, user.id],
        });

        // Add project to user
        await update(ref(Database, `users/${user.id}`), {
            projects: [...user.projects, projectId],
        });

        return {
            data: null,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error adding user ${user.id} to project ${projectId}. (AddUserToProject)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
