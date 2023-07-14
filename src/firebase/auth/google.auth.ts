import {IResult} from '../../types/IResult.ts';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {Auth} from './index.ts';
import IUser from '../../types/IUser.ts';
import {SaveUserToDatabase} from '../database';

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const SignWithGoogle = async (): Promise<IResult<IUser>> => {
    try {
        const userCredential = await signInWithPopup(Auth, GoogleProvider);

        const firebaseUser = userCredential.user;
        const user = await SaveUserToDatabase(firebaseUser);
        if (user.error) {
            return {
                data: null,
                error: user.error,
            };
        }

        return {
            data: user.data,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error,
        };
    }
};
