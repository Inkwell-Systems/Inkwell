import {useState} from 'react';
import IUser, {DefaultUser} from '../../../types/IUser.ts';

const UseUserProvider = () => {
    const [user, setUser] = useState<IUser>(DefaultUser);

    return {
        user,
        setUser,
    };
};

export default UseUserProvider;
