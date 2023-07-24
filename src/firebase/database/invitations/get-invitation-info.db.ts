import {IInvitation} from "../../../types/IInvitation.ts";
import {IResult} from "../../../types/IResult.ts";
import {FetchUser} from "../user/fetch-user.db.ts";
import {FetchProject} from "../project";

export const GetInvitationUserName = async (invitation: IInvitation): Promise<IResult<string>> => {
    try {
        const user = await FetchUser(invitation.userIdFrom);
        if (user.error) {
            console.log(
                `Error fetching user ${invitation.userIdFrom} from database. (GetInvitationUserName)`,
            );
            console.error(user.error);

            return {
                data: null,
                error: user.error,
            };
        }

        return {
            data: user.data.name,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error getting user name for invitation ${invitation.id}. (GetInvitationUserName)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
}

export const GetInvitationProjectName = async (invitation: IInvitation): Promise<IResult<string>> => {
    try {
        const user = await FetchProject(invitation.projectId);
        if (user.error) {
            console.log(
                `Error fetching project ${invitation.userIdFrom} from database. (GetInvitationProjectName)`,
            );
            console.error(user.error);

            return {
                data: null,
                error: user.error,
            };
        }

        return {
            data: user.data.projectName,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error getting project name for invitation ${invitation.id}. (GetInvitationProjectName)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
}