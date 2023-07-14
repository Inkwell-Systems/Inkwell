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

        const proj = {
            id: user.uid,
            email: user.email,
            name: displayName,
            profilePicture: photoURL,
            projects: [],
        };

        await set(ref(Database, `users/${user.uid}`), proj);

        return {
            data: {
                isAuthenticated: true,
                ...proj,
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

export const UpdateUserInDatabase = async (
    user: IUser,
): Promise<IResult<IUser>> => {
    try {
        await set(ref(Database, `users/${user.id}`), {
            uid: user.id,
            email: user.email,
            displayName: user.name,
            photoURL: user.profilePicture,
        });

        return {
            data: user,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error,
        };
    }
};

export const DeleteUserFromDatabase = async (
    user: User,
): Promise<IResult<null>> => {
    try {
        await set(ref(Database, `users/${user.uid}`), null);

        return {
            data: null,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error,
        };
    }
};
