import {IInvitation} from '../../../types/IInvitation.ts';
import {IResult} from '../../../types/IResult.ts';
import {
    equalTo,
    get,
    orderByChild,
    push,
    query,
    ref,
    set,
} from 'firebase/database';
import {Database, FetchProjectFromDatabase} from '../../index.ts';
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

        // Check if user is already a member of the project
        const projRes = await FetchProjectFromDatabase(projectId);
        if (projRes.error) {
            console.log(
                `Error fetching project ${projectId} from database. (CreateInvitation)`,
            );
            console.error(projRes.error);
            return {
                data: null,
                error: projRes.error,
            };
        }

        if (projRes.data.members.includes(user.data.id)) {
            console.log(
                `User ${user.data.id} is already a member of project ${projectId}. (CreateInvitation)`,
            );
            return {
                data: null,
                error: new Error(
                    `User ${user.data.id} is already a member of project ${projectId}.`,
                ),
            };
        }

        // Check if user already has an invitation to the project
        const invRef = ref(Database, 'invitations/');
        const invQuery1 = query(
            invRef,
            orderByChild('userIdTo'),
            equalTo(user.data.id),
        );
        const invSnap1 = await get(invQuery1);

        const invQuery2 = query(
            invRef,
            orderByChild('projectId'),
            equalTo(projectId),
        );
        const invSnap2 = await get(invQuery2);

        if (invSnap1.exists() && invSnap2.exists()) {
            const inv1 = invSnap1.val();
            const inv2 = invSnap2.val();

            console.log(inv1);
            console.log(inv2);

            for (const key in inv1) {
                if (inv2[key]) {
                    console.log(
                        `User ${user.data.id} already has an invitation to project ${projectId}. (CreateInvitation)`,
                    );
                    return {
                        data: null,
                        error: new Error(
                            `User ${user.data.id} already has an invitation to project ${projectId}.`,
                        ),
                    };
                }
            }
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
