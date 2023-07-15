export default interface IUser {
    isAuthenticated: boolean;
    id: string;
    name: string;
    email: string;
    profilePicture: string;
    projects: string[];
}

export interface IFetchedUser {
    id: string;
    name: string;
    email: string;
    profilePicture: string;
}

// TODO(calco): CHANGE THIS IN PRODUCTION
export const DefaultUser: IUser = {
    isAuthenticated: false,
    id: 'not-a-valid-id',
    name: 'Debug User',
    email: 'not-a-valid-email',
    profilePicture: 'https://robohash.org/debug.png',
    projects: [],
};
