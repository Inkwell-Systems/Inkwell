export default interface IUser {
    isAuthenticated: boolean;
    id: number;
    name: string;
    profilePicture: string;
}

export const DefaultUser: IUser = {
    isAuthenticated: false,
    id: -1,
    name: 'Debug User',
    profilePicture: 'https://robohash.org/debug.png',
};
