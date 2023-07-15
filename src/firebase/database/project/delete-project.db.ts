import IProject from '../../../types/IProject.ts';
import {IResult} from '../../../types/IResult.ts';
import {
    equalTo,
    get,
    orderByChild,
    query,
    ref,
    set,
    update,
} from 'firebase/database';
import {Database} from '../../index.ts';
import {IInvitation} from '../../../types/IInvitation.ts';

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

        // Find all invitations to this project and delete them
        const invitationsQuery = query(
            ref(Database, 'invitations'),
            orderByChild('projectId'),
            equalTo(project.projectId),
        );
        const invitationsSnapshot = await get(invitationsQuery);

        if (invitationsSnapshot.exists()) {
            const invitations: IInvitation[] = Object.values(
                invitationsSnapshot.val(),
            );
            for (const invitation of invitations) {
                await set(ref(Database, `invitations/${invitation.id}`), null);
            }
        }

        await set(ref(Database, `projects/${project.projectId}`), null);
        console.log(
            `Deleted project ${project.projectId} from database. (DeleteProject)`,
        );

        return {
            data: null,
            error: null,
        };
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
