import {useContext} from 'react';
import {UserContext} from '../../contexts/user-provider/user-provider.ctx.tsx';

const UseUserProvider = () => {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUserProvider must be used within a UserProvider');
    }

    return context;
};

export default UseUserProvider;
