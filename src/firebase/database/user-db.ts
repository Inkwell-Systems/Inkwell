import {IResult} from '../../types/IResult.ts';
import IUser from '../../types/IUser.ts';
import {User} from 'firebase/auth';

import {set, ref} from 'firebase/database';
import {Database} from './init.ts';

export const SaveUserToDatabase = async (
    user: User,
): Promise<IResult<IUser>> => {
    try {
        const displayName = user.displayName ?? 'Default Name';
        const photoURL = user.photoURL ?? `https://robohash.org/${user.uid}`;

        await set(ref(Database, `users/${user.uid}`), {
            uid: user.uid,
            email: user.email,
            displayName: displayName,
            photoURL: photoURL,
        });

        return {
            data: {
                isAuthenticated: true,
                id: user.uid,
                name: displayName,
                profilePicture: photoURL,
            },
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error,
        };
    }
};
