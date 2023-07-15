import {IInvitation} from '../../../types/IInvitation.ts';
import {IResult} from '../../../types/IResult.ts';
import {push, ref, set} from 'firebase/database';
import {Database} from '../../index.ts';

export const CreateInvitation = async (
    emailTo: string,
    userIdFrom: string,
    projectId: string,
): Promise<IResult<IInvitation>> => {
    try {
        const invitation: IInvitation = {
            id: '',
            userIdTo: emailTo,
            userIdFrom: userIdFrom,
            projectId: projectId,
            createdAt: new Date(),
        };

        const snap = await push(ref(Database, 'invitations/'));
        invitation.id = snap.key as string;
        await set(snap.ref, invitation);

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
