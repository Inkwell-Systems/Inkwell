import {Auth} from './init.ts';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    User,
} from 'firebase/auth';
import {IResult} from '../../types/IResult.ts';

export const SignUpWithPassword = async (
    email,
    password,
): Promise<IResult<User>> => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            Auth,
            email,
            password,
        );

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

export const SignInWithPassword = async (
    email,
    password,
): Promise<IResult<User>> => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            Auth,
            email,
            password,
        );

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
