import {Auth} from '../index.ts';
import {IResult} from '../../types/IResult.ts';
import {DeleteUserFromDatabase} from '../database';

export * from './google.auth.ts';
export * from './password.auth.ts';

export const SignUserOut = async () => {
    await Auth.signOut();

    console.log('Signed out user. (SignUserOut)');
};

export const DeleteUser = async (): Promise<IResult<null>> => {
    const user = Auth.currentUser;

    if (user) {
        const res = await DeleteUserFromDatabase(user);

        if (res.error) {
            return {
                data: null,
                error: res.error,
            };
        }

        await user.delete();

        return {
            data: null,
            error: null,
        };
    }
};
