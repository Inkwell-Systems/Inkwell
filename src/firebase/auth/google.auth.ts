import {IResult} from '../../types/IResult.ts';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import IUser from '../../types/IUser.ts';
import {SaveUserToDatabase} from '../database';
import {Auth} from '../index.ts';

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

        const userData = user.data;
        if (typeof userData.projects === 'undefined') {
            userData.projects = [];
        }

        console.log('GOOGLE SIGN IN');
        console.log(userData);

        return {
            data: userData,
            error: null,
        };
    } catch (error) {
        return {
            data: null,
            error: error,
        };
    }
};
