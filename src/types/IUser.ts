export default interface IUser {
    isAuthenticated: boolean;
    id: number;
    name: string;
    profilePicture: string;
}

// TODO(calco): CHANGE THIS IN PRODUCTION
export const DefaultUser: IUser = {
    isAuthenticated: true,
    id: -1,
    name: 'Debug User',
    profilePicture: 'https://robohash.org/debug.png',
};
