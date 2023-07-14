import {Auth} from './index.ts';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';
import {IResult} from '../../types/IResult.ts';
import IUser from '../../types/IUser.ts';
import {SaveUserToDatabase} from '../database';

export const SignUpWithPassword = async (
    email,
    password,
): Promise<IResult<IUser>> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            Auth,
            email,
            password,
        );

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

export const SignInWithPassword = async (
    email,
    password,
): Promise<IResult<IUser>> => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            Auth,
            email,
            password,
        );

        // Should already be saved in database.
        const firebaseUser = userCredential.user;
        const user: IUser = {
            isAuthenticated: true,
            id: firebaseUser.uid,
            email: firebaseUser.email,
            name: firebaseUser.displayName,
            profilePicture: firebaseUser.photoURL,
            projects: [],
        };

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
