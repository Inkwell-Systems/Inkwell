import {User} from 'firebase/auth';
import {IResult} from '../../../types/IResult.ts';
import IUser from '../../../types/IUser.ts';
import {get, ref, set} from 'firebase/database';
import {Database} from '../../index.ts';

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
        if (!res.exists()) {
            console.log(
                `Set user ${user.uid} to database. (SaveUserToDatabase)`,
            );
            await set(r, usr);
        } else {
            console.log(
                `User ${user.uid} already exists in database. (SaveUserToDatabase)`,
            );

            return {
                data: {
                    isAuthenticated: true,
                    id: res.val().id,
                    email: res.val().email,
                    name: res.val().name,
                    profilePicture: res.val().profilePicture,
                    projects: res.val().projects,
                },
                error: null,
            };
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
