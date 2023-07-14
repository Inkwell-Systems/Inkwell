import IUser from '../../../types/IUser.ts';
import {IResult} from '../../../types/IResult.ts';
import {ref, update} from 'firebase/database';
import {Database} from '../index.ts';

export const UpdateUserInDatabase = async (
    user: IUser,
): Promise<IResult<IUser>> => {
    try {
        // TODO(calco): Decide what to be able to update.
        await update(ref(Database, `users/${user.id}`), {
            name: user.name,
            profilePicture: user.profilePicture,
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
