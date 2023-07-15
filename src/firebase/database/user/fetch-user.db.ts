import {IResult} from '../../../types/IResult.ts';
import {get, ref} from 'firebase/database';
import {Database} from '../../index.ts';
import {IFetchedUser} from '../../../types';

export const FetchUser = async (
    uid: string,
): Promise<IResult<IFetchedUser>> => {
    try {
        const userSnap = await get(ref(Database, `users/${uid}`));
        if (!userSnap.exists()) {
            console.log(
                `Tried fetching user ${uid}, but such a user does not exist. (FetchUser)`,
            );
            return {
                data: null,
                error: new Error(`User ${uid} does not exist.`),
            };
        }

        console.log(
            `Successfully fetched user ${uid} from database. (FetchUser)`,
        );
        return {
            data: {
                id: uid,
                name: userSnap.val().name,
                email: userSnap.val().email,
                profilePicture: userSnap.val().profilePicture,
            },
            error: null,
        };
    } catch (error) {
        console.log(`Error fetching user ${uid}from database. (FetchUser)`);
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
