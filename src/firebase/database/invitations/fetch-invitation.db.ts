import {IResult} from '../../../types/IResult.ts';
import {IInvitation} from '../../../types/IInvitation.ts';
import {equalTo, get, orderByChild, query, ref} from 'firebase/database';
import {Database} from '../../index.ts';

export const FetchUserInvitations = async (
    userId: string,
): Promise<IResult<IInvitation[]>> => {
    try {
        const invitationQuery = query(
            ref(Database, 'invitations'),
            orderByChild('userIdTo'),
            equalTo(userId),
        );
        const snapshot = await get(invitationQuery);

        if (!snapshot.exists()) {
            console.log('No invitations found!');
            return {
                data: [],
                error: null,
            };
        }

        const invitations: IInvitation[] = [];
        snapshot.forEach(childSnapshot => {
            const invitation = childSnapshot.val();
            invitations.push(invitation);
        });

        return {
            data: invitations,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error fetching invitations for user ${userId}! (FetchUserInvitations)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
