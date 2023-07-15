import {IResult} from '../../../types/IResult.ts';
import {
    equalTo,
    get,
    limitToFirst,
    orderByChild,
    query,
    ref,
} from 'firebase/database';
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

export const FetchUserByEmail = async (
    email: string,
): Promise<IResult<IFetchedUser>> => {
    try {
        const usersRef = ref(Database, 'users');

        // Query users ref for user with email
        const q = query(
            usersRef,
            orderByChild('email'),
            equalTo(email),
            limitToFirst(1),
        );

        const querySnap = await get(q);
        if (!querySnap.exists()) {
            console.log(
                `Tried fetching user with email ${email}, but such a user does not exist. (FetchUser)`,
            );
            return {
                data: null,
                error: new Error(`User with email ${email} does not exist.`),
            };
        }

        const user = querySnap.val()[
            Object.keys(querySnap.val())[0]
        ] as IFetchedUser;
        return {
            data: user,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error fetching user with email ${email} from database. (FetchUser)`,
        );
        console.error(error);

        return {
            data: null,
            error: error,
        };
    }
};
