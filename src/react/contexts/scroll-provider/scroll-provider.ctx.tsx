import {createContext, useEffect, useState} from 'react';

interface IScrollContext {
    value: number;
}

const ScrollContext = createContext<IScrollContext>({value: 0});

const ScrollProvider = ({children}) => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <ScrollContext.Provider
            value={{
                value: scroll,
            }}
        >
            {children}
        </ScrollContext.Provider>
    );
};

export {ScrollProvider, ScrollContext};
