import {User} from 'firebase/auth';

export default interface IUser {
    isAuthenticated: boolean;
    id: string;
    name: string;
    profilePicture: string;
}

// TODO(calco): CHANGE THIS IN PRODUCTION
export const DefaultUser: IUser = {
    isAuthenticated: false,
    id: 'not-a-valid-id',
    name: 'Debug User',
    profilePicture: 'https://robohash.org/debug.png',
};
