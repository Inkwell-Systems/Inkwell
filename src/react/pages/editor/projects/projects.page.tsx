import PageForm from '../../../components/misc/page-form.component.tsx';
import Navigation from '../../../components/navigation/navigation.component.tsx';
import {SignContainer} from '../../../components/sign/sign.styles.tsx';
import {useEffect, useState} from 'react';
import IProject, {CreateLocalProject} from '../../../../types/IProject.ts';
import ProjectCard from '../../../components/editor/projects/project-card.components.tsx';
import CreateProjectCard from '../../../components/editor/projects/create-project-card.component.tsx';
import {Button} from '../../../components/inputs/button/button.component.tsx';
import UseProjectProvider from '../../../hooks/project-provider/project-provider.hook.ts';
import {useNavigate} from 'react-router-dom';
import TextInput from '../../../components/inputs/input/text-input.component.tsx';
import MultilineInput from '../../../components/inputs/input/multiline-input.component.tsx';
import CheckboxInput from '../../../components/inputs/input/checkbox-input.component.tsx';
import {ErrorMessage} from '../../../../styles/utils.styles.tsx';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';
import {DefaultUser} from '../../../../types';
import {
    CreateProjectInDatabase,
    FetchUserProjectsFromDatabase,
} from '../../../../firebase';
import {DefaultScopeHierarchy} from '../../../../types/IScope.ts';

const Projects = () => {
    const [error, setError] = useState<Error | null>(null);

    const [stage, setStage] = useState(0);
    const [projects, setProjects] = useState<IProject[] | null>(null);
    const nav = useNavigate();

    const pCtx = UseProjectProvider();
    const uCtx = UseUserProvider();

    const [loadedJson, setLoadedJson] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectCloud, setProjectCloud] = useState(false);
    const [projectCode, setProjectCode] = useState('');

    const handleLoadLocalProject = () => {
        // TODO(calco): Validate the json.
        const project = JSON.parse(loadedJson);
        project.cloud = false;

        pCtx.setValue(project);

        nav('/editor/local');
    };

    const handleCreateNewProject = async () => {
        if (projectCloud) {
            const result = await CreateProjectInDatabase(
                projectTitle,
                projectDescription,
                uCtx.value,
                DefaultScopeHierarchy,
                [],
            );
            setError(result.error);

            if (result.data) {
                pCtx.setValue(result.data);
                nav(`/editor/${result.data.projectId}`);
            }
        } else {
            const project = CreateLocalProject(
                projectTitle,
                projectDescription,
            );

            pCtx.setValue(project);
            nav(`/editor/local`);
        }
    };

    const loadCloudProjects = async () => {
        const result = await FetchUserProjectsFromDatabase(uCtx.value.id);
        if (!result.error) {
            return result.data;
        }
    };

    const loadLocalProject = () => {
        const jsonProj = localStorage.getItem('project');

        if (jsonProj !== 'null' && jsonProj !== null) {
            const project = JSON.parse(jsonProj);
            return [project];
        }
        return [];
    };

    const handleJoinViaCode = async () => {
        nav(`/invite/${projectCode}`);
    };

    // TODO(calco): This is bad.
    useEffect(() => {
        setProjects(loadLocalProject());
    }, []);

    useEffect(() => {
        if (uCtx.value !== DefaultUser) {
            loadCloudProjects().then(projects => {
                setProjects([...projects, ...loadLocalProject()]);
            });
        }
    }, [uCtx.value]);

    const stages = [
        <PageForm
            addon={'+'}
            addonOnClick={() => setStage(1)}
            outerStyles={{
                maxWidth: '50%',
            }}
            styles={{}}
            title={'PROJECTS'}
        >
            {projects === null ? (
                <>
                    <h2>Loading...</h2>
                    <ErrorMessage>{error?.message}</ErrorMessage>
                </>
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
            outerStyles={{
                maxWidth: '50%',
            }}
            title={'PROJECTS'}
        >
            <CreateProjectCard
                description="Load a project from your machine."
                title="Load Local Project"
                onClick={() => setStage(2)}
            />
            <CreateProjectCard
                description="Create a new project in the cloud."
                title="New project"
                onClick={() => setStage(3)}
            />
            <CreateProjectCard
                description="Join via a received code from friends, family or foes."
                title="Join via Code"
                onClick={() => setStage(4)}
            />
        </PageForm>,
        // Load from JSON
        <PageForm
            addon={'<-'}
            addonOnClick={() => setStage(1)}
            styles={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            outerStyles={{}}
            title={'PROJECTS'}
        >
            <input
                type="file"
                onChange={e => {
                    const reader = new FileReader();
                    reader.onload = () => {
                        setLoadedJson(reader.result as string);
                    };
                    reader.readAsText(e.target.files[0]);
                }}
            />
            <Button
                config={{
                    style: 'secondary',
                    inverted: false,
                }}
                style={{
                    color: '#3e3e3e',
                }}
                onClick={handleLoadLocalProject}
            >
                Load Project
            </Button>
        </PageForm>,
        // Create completely new one
        <PageForm
            addon={'<-'}
            addonOnClick={() => setStage(1)}
            styles={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
            outerStyles={{}}
            title={'PROJECTS'}
        >
            <div>
                <TextInput
                    styles={{
                        marginBottom: '2rem',
                    }}
                    label="Title"
                    value={projectTitle}
                    onChange={e => setProjectTitle(e.target.value)}
                />

                <MultilineInput
                    styles={{
                        marginBottom: '2rem',
                        height: '10rem',
                    }}
                    label="Description"
                    value={projectDescription}
                    onChange={e => setProjectDescription(e.target.value)}
                />

                <ErrorMessage>{error?.message}</ErrorMessage>
            </div>

            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <CheckboxInput
                    label="Cloud"
                    value={projectCloud}
                    onChange={e => setProjectCloud(e.target.checked)}
                />

                <Button
                    config={{
                        style: 'primary',
                        inverted: false,
                    }}
                    style={{}}
                    onClick={handleCreateNewProject}
                >
                    Create
                </Button>
            </div>
        </PageForm>,
        // Join via code
        <PageForm
            addon={'<-'}
            addonOnClick={() => setStage(1)}
            styles={{}}
            outerStyles={{}}
            title={'PROJECTS'}
        >
            <TextInput
                styles={{
                    marginBottom: '2rem',
                }}
                label="Code"
                value={projectCode}
                onChange={e => setProjectCode(e.target.value)}
            />

            <Button
                config={{
                    style: 'secondary',
                    inverted: true,
                }}
                style={{}}
                onClick={handleJoinViaCode}
            >
                Join
            </Button>
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
