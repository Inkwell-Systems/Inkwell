import {useContext} from 'react';
import {ScrollContext} from '../../contexts/scroll-provider/scroll-provider.ctx.tsx';

const UseScrollProvider = () => {
    const context = useContext(ScrollContext);

    if (!context) {
        throw new Error(
            'useScrollProvider must be used within a ScrollProvider',
        );
    }

    return context;
};

export default UseScrollProvider;
