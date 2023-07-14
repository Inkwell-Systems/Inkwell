import {IResult} from '../../types/IResult.ts';
import {GoogleAuthProvider, signInWithPopup, User} from 'firebase/auth';
import {Auth} from './init.ts';

const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const SignWithGoogle = async (): Promise<IResult<User>> => {
    try {
        const userCredential = await signInWithPopup(Auth, GoogleProvider);

        const user = userCredential.user;
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
