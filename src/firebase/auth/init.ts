import {getAuth} from 'firebase/auth';
import {FirebaseApp} from '../init.ts';
import {DeleteUserFromDatabase} from '../database/user-db.ts';

console.log('Initialized firebase auth!');
export const Auth = getAuth(FirebaseApp);

export const SignUserOut = async () => {
    await Auth.signOut();
};

export const DeleteUser = async () => {
    const user = Auth.currentUser;

    if (user) {
        await DeleteUserFromDatabase(user);
        await user.delete();
    }

    // Should be unnecessary
    // await SignUserOut();
};
