import {createContext, useState} from 'react';
import IProject from '../../../types/IProject.ts';

interface IProjectContext {
    value: IProject;
    setValue: (value: IProject) => void;
}

type TProjectContext = IProjectContext | null;

const ProjectContext = createContext<TProjectContext>({
    value: null,
    setValue: () => {
        console.log('ProjectProvider: setValue() is not implemented');
    },
});

const ProjectProvider = ({children}) => {
    const [project, setProject] = useState<IProject>(null);

    return (
        <ProjectContext.Provider
            value={{
                value: project,
                setValue: setProject,
            }}
        >
            {children}
        </ProjectContext.Provider>
    );
};

export {ProjectProvider, ProjectContext};
