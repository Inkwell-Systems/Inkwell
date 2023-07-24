import {IResult} from '../../../types/IResult.ts';
import {AddUserToProject} from '../project';
import {IInvitation} from '../../../types/IInvitation.ts';
import {ref, set} from 'firebase/database';
import {Database} from '../../index.ts';

export const AcceptLinkInvitation = async (
    userId: string,
    projectId: string,
): Promise<IResult<null>> => {
    try {
        const res = await AddUserToProject(userId, projectId);
        if (res.error) {
            console.log(
                `Error adding user ${userId} to project ${projectId}. (AcceptLinkInvitation)`,
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
            `Error accepting invitation for user ${userId}. (AcceptLinkInvitation)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};

export const AcceptInvitation = async (
    invitation: IInvitation,
): Promise<IResult<null>> => {
    try {
        const res = await AddUserToProject(
            invitation.userIdTo,
            invitation.projectId,
        );

        if (res.error) {
            console.log(
                `Error adding user ${invitation.userIdTo} to project ${invitation.projectId}. (AcceptInvitation)`,
            );
            console.error(res.error);

            return {
                data: null,
                error: res.error,
            };
        }

        // Remove the invitation
        await set(ref(Database, `invitations/${invitation.id}`), null);

        console.log(
            `Successfully accepted invitation to ${invitation.projectId} for user ${invitation.userIdTo}. (AcceptInvitation)`,
        );
        return {
            data: null,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error accepting invitation to ${invitation.projectId} for user ${invitation.userIdTo}. (AcceptInvitation)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};

export const RejectInvitation = async (
    invitation: IInvitation,
): Promise<IResult<null>> => {
    try {
        // Remove the invitation
        await set(ref(Database, `invitations/${invitation.id}`), null);

        console.log(
            `Successfully rejected invitation to ${invitation.projectId} for user ${invitation.userIdTo}. (RejectInvitation)`,
        );
        return {
            data: null,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error rejecting invitation to ${invitation.projectId} for user ${invitation.userIdTo}. (RejectInvitation)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
}