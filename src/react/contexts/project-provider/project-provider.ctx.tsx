import {createContext, useEffect, useState} from 'react';
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

    // Load project from local storage if it exists and is a local project.
    useEffect(() => {
        const project = localStorage.getItem('project');
        if (project && project !== 'null') {
            const p = JSON.parse(project);
            if (!p.cloud) {
                setProject(p);
            }
        }
    }, []);

    // Save project to local storage.
    useEffect(() => {
        if (!project) localStorage.removeItem('project');
        else if (!project.cloud)
            localStorage.setItem('project', JSON.stringify(project));
    }, [project]);

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
