import {getAuth} from 'firebase/auth';
import {FirebaseApp} from '../init.ts';

console.log('Initialized firebase auth!');
export const Auth = getAuth(FirebaseApp);

export const SignUserOut = async () => {
    await Auth.signOut();
};
