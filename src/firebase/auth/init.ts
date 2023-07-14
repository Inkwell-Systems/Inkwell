import {getAuth} from 'firebase/auth';
import {FirebaseApp} from '../init.ts';
import {DeleteUserFromDatabase} from '../database/user-db.ts';
import {IResult} from '../../types/IResult.ts';

console.log('Initialized firebase auth!');
export const Auth = getAuth(FirebaseApp);

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

    // Should be unnecessary
    // await SignUserOut();
};
