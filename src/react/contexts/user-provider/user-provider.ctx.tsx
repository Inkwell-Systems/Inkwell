import IUser, {DefaultUser} from '../../../types/IUser.ts';
import {createContext, useState} from 'react';
import {IScrollContext} from '../scroll-provider/scroll-provider.ctx.tsx';

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
