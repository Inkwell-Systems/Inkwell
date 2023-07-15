import IUser from '../../../types/IUser.ts';
import {IResult} from '../../../types/IResult.ts';
import {AddUserToProject} from '../project';

export const AcceptLinkInvitation = async (
    user: IUser,
    projectId: string,
): Promise<IResult<null>> => {
    try {
        const res = await AddUserToProject(user, projectId);
        if (res.error) {
            console.log(
                `Error adding user ${user.id} to project ${projectId}. (AcceptLinkInvitation)`,
            );
            console.error(res.error);

            return {
                data: null,
                error: res.error,
            };
        }

        return {
            data: null,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error accepting invitation for user ${user.id}. (AcceptLinkInvitation)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
