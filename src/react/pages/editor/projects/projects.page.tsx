import PageForm from '../../../components/misc/page-form.component.tsx';
import Navigation from '../../../components/navigation/navigation.component.tsx';
import {SignContainer} from '../../../components/sign/sign.styles.tsx';
import {useEffect, useState} from 'react';
import IProject, {LoadProjectFromJson} from '../../../../types/IProject.ts';
import ProjectCard from '../../../components/editor/projects/project-card.components.tsx';

// TODO(calco): REMOVE THIS IN PRODUCTION
import projectJsonRaw from '../sampleProject.json?raw';

const Projects = () => {
    const [projects, setProjects] = useState<IProject[] | null>(null);
    const [stage, setStage] = useState(0);

    useEffect(() => {
        // TODO(calco): FETCH PROJECTS FROM API

        const defaultProject = LoadProjectFromJson(projectJsonRaw);
        setProjects([defaultProject, defaultProject, defaultProject]);
    }, []);

    const stages = [
        <PageForm
            addon={'+'}
            addonOnClick={() => setStage(1)}
            styles={{}}
            title={'PROJECTS'}
        >
            {projects === null ? (
                <h2>Loading...</h2>
            ) : (
                projects.map((project, index) => (
                    <ProjectCard project={project} key={index} />
                ))
            )}
        </PageForm>,
        <PageForm
            addon={'<-'}
            addonOnClick={() => setStage(0)}
            styles={{}}
            title={'PROJECTS'}
        >
            <h2>bbbbbbb</h2>
        </PageForm>,
        <PageForm
            addon={'<-'}
            addonOnClick={() => setStage(1)}
            styles={{}}
            title={'PROJECTS'}
        >
            <h3>ccccccccc</h3>
        </PageForm>,
    ];

    return (
        <SignContainer>
            <Navigation />

            {stages[stage]}
        </SignContainer>
    );
};

export default Projects;
