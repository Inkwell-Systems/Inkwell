import IUser, {DefaultUser} from '../../../types/IUser.ts';
import {createContext, useEffect, useState} from 'react';

interface IUserContext {
    value: IUser;
    setValue: (value: IUser) => void;
}

const UserContext = createContext<IUserContext>({
    value: DefaultUser,
    setValue: () => {
        console.log('UserProvider: setValue() is not implemented');
    },
});

const UserProvider = ({children}) => {
    const [user, setUser] = useState<IUser>(DefaultUser);

    // Load user from local storage if it exists.
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUser(JSON.parse(user));
        }
    }, []);

    // Save user to local storage.
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider
            value={{
                value: user,
                setValue: setUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export type {IUserContext};
export {UserProvider, UserContext};
