import {User} from 'firebase/auth';

export default interface IUser {
    isAuthenticated: boolean;
    id: number;
    name: string;
    profilePicture: string;
}

// TODO(calco): CHANGE THIS IN PRODUCTION
export const DefaultUser: IUser = {
    isAuthenticated: false,
    id: -1,
    name: 'Debug User',
    profilePicture: 'https://robohash.org/debug.png',
};

// TODO(calco): Convert with ID as well.
export const ConvertToUser = (data: User): IUser => ({
    isAuthenticated: true,
    id: -1,
    name: data.displayName ?? 'Debug User',
    profilePicture: data.photoURL ?? 'https://robohash.org/debug.png',
});
