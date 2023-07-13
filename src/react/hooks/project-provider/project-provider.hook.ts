import {useContext} from 'react';
import {ProjectContext} from '../../contexts/project-provider/project-provider.ctx.tsx';

const UseProjectProvider = () => {
    const context = useContext(ProjectContext);

    if (!context) {
        throw new Error(
            'useProjectProvider must be used within a ProjectProvider',
        );
    }

    return context;
};

export default UseProjectProvider;
