import IProject from '../../../types/IProject.ts';
import {IResult} from '../../../types/IResult.ts';
import {get, ref, set, update} from 'firebase/database';
import {Database} from '../../index.ts';

export const DeleteProject = async (
    project: IProject,
): Promise<IResult<null>> => {
    try {
        const userIds = [project.owner, ...project.members];
        for (const memberId of userIds) {
            const user = await get(ref(Database, `users/${memberId}`));
            if (!user.exists()) continue;

            await update(ref(Database, `users/${memberId}`), {
                projects: [
                    ...user
                        .val()
                        .projects.filter(
                            (projectId: string) =>
                                projectId !== project.projectId,
                        ),
                ],
            });
        }

        await set(ref(Database, `projects/${project.projectId}`), null);
        console.log(
            `Deleted project ${project.projectId} from database. (DeleteProject)`,
        );
    } catch (error) {
        console.log(
            `Failed to delete project ${project.projectId} in database. (DeleteProject)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
