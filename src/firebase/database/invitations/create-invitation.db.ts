import {IInvitation} from '../../../types/IInvitation.ts';
import {IResult} from '../../../types/IResult.ts';
import {push, ref, set} from 'firebase/database';
import {Database} from '../../index.ts';
import {FetchUserByEmail} from '../user/fetch-user.db.ts';

export const CreateInvitation = async (
    emailTo: string,
    userIdFrom: string,
    projectId: string,
    message: string,
): Promise<IResult<IInvitation>> => {
    try {
        // Get the user id from the email
        const user = await FetchUserByEmail(emailTo);
        if (user.error) {
            console.log(
                `Error fetching user ${emailTo} from database. (CreateInvitation)`,
            );
            console.error(user.error);
            return {
                data: null,
                error: user.error,
            };
        }

        const invitation: IInvitation = {
            id: '',
            userIdTo: user.data.id,
            userIdFrom: userIdFrom,
            projectId: projectId,
            createdAt: new Date(),
            message: message,
        };

        const snap = await push(ref(Database, 'invitations/'));
        invitation.id = snap.key as string;
        await set(snap.ref, invitation);

        console.log(
            `Invitation created: ${invitation.id}. From ${userIdFrom} to ${user.data.id}. (CreateInvitation)`,
        );
        return {
            data: invitation,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error,
        };
    }
};
