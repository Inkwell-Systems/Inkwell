import {IResult} from '../../types/IResult.ts';
import IUser from '../../types/IUser.ts';
import {User} from 'firebase/auth';

import {set, ref, get, update} from 'firebase/database';
import {Database} from './init.ts';

export const SaveUserToDatabase = async (
    user: User,
): Promise<IResult<IUser>> => {
    try {
        const displayName = user.displayName ?? 'Default Name';
        const photoURL = user.photoURL ?? `https://robohash.org/${user.uid}`;

        const usr = {
            id: user.uid,
            email: user.email,
            name: displayName,
            profilePicture: photoURL,
            projects: [],
        };

        const r = ref(Database, `users/${user.uid}`);
        const res = await get(r);

        // TODO(calco): This is bad. If users signs in with email, changes stuff, then google, it will overwrite the changes
        if (res.exists()) {
            usr.projects = res.val().projects;
            usr.id = res.val().id;
            usr.email = res.val().email;

            console.log(
                `Update user ${user.uid} in database. (SaveUserToDatabase)`,
            );
            await update(r, usr);
        } else {
            console.log(
                `Set user ${user.uid} to database. (SaveUserToDatabase)`,
            );
            await set(r, usr);
        }

        return {
            data: {
                isAuthenticated: true,
                ...usr,
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
        await update(ref(Database, `users/${user.id}`), {
            uid: user.id,
            email: user.email,
            displayName: user.name,
            photoURL: user.profilePicture,
        });

        console.log(
            `Updated user ${user.id} in database. (UpdateUserInDatabase)`,
        );

        return {
            data: user,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error updating user ${user.id} in database. (UpdateUserInDatabase)\n${error}`,
        );

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

        console.log(
            `Deleted user ${user.uid} from database. (DeleteUserFromDatabase)`,
        );

        return {
            data: null,
            error: null,
        };
    } catch (error) {
        console.log(
            `Error deleting user ${user.uid} from database. (DeleteUserFromDatabase)\n${error}`,
        );

        return {
            data: null,
            error: error,
        };
    }
};
