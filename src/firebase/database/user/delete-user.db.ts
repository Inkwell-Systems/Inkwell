import {User} from 'firebase/auth';
import {IResult} from '../../../types/IResult.ts';
import {ref, set} from 'firebase/database';
import {Database} from '../index.ts';

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
