import {Auth} from './init.ts';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    User,
} from 'firebase/auth';
import {IResult} from '../../types/IResult.ts';
import IUser from '../../types/IUser.ts';
import {SaveUserToDatabase} from '../database/user-db.ts';

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
            name: firebaseUser.displayName,
            profilePicture: firebaseUser.photoURL,
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
