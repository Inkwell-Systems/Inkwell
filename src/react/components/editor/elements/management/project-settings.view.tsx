import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import UseProjectProvider from '../../../../hooks/project-provider/project-provider.hook.ts';
import {Button} from '../../../inputs/button/button.component.tsx';
import {CreateProjectInDatabase, UpdateProject} from '../../../../../firebase';
import {ErrorMessage} from '../../../../../styles/utils.styles.tsx';
import {useNavigate} from 'react-router-dom';
import UseUserProvider from '../../../../hooks/user-provider/userProvider.hook.ts';

const ProjectSettingsContainer = styled.div`
    width: 60%;
    min-width: 40rem;

    margin-left: auto;
    margin-right: auto;

    height: 100%;

    overflow: hidden;
    overflow-y: scroll;

    padding: 2rem;
`;

const ProjectSettingsSectionTitle = styled.h1`
    font-size: 0.8rem;
    font-weight: 300;
    color: #b4b4b4;
    margin-bottom: 2rem;
`;

const ProjectSettingsSection = styled.div`
    width: 100%;
    background-color: #1e1e1f;
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const VerticalSplit = styled.div`
    display: flex;
`;

const Pane = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p {
        font-size: 1rem;
        font-weight: 400;
        color: #b4b4b4;
    }
`;

const Checkbox = styled.input`
    width: 1.5rem;
    height: 1.5rem;
    aspect-ratio: 1/1;
    margin-right: 1rem;
`;

const Input = styled.input`
    width: 100%;
    height: 2rem;

    background-color: #2c2c2e;
    border: 2px solid #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
        border: 2px solid #18a5ec;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 10rem;

    background-color: #2c2c2e;
    border: 2px solid #2c2c2e;
    border-radius: 0.5rem;
    padding: 0.5rem;

    font-size: 1rem;
    font-weight: 400;
    color: #b4b4b4;

    &:focus {
        outline: none;
        border: 2px solid #18a5ec;
    }
`;

const ProjectSettingsView = () => {
    const uCtx = UseUserProvider();
    const pCtx = UseProjectProvider();
    const nav = useNavigate();

    const [error, setError] = useState<Error | null>(null);
    const [cloud, setCloud] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [banner, setBanner] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleTurnProjectCloudOn = async () => {
        const proj = await CreateProjectInDatabase(
            name,
            description,
            uCtx.value,
        );

        setError(proj.error);
        if (!proj.error) {
            localStorage.setItem('project', null);

            pCtx.setValue(proj.data);
            nav(`/editor/${proj.data.projectId}`);

            console.log(
                `Moved local project to cloud. (project-settings.view.tsx)`,
            );
        } else {
            console.log(
                `Failed to move local project to cloud. (project-settings.view.tsx)`,
            );
        }
    };

    const handleSaveProjectSettings = async () => {
        setError(null);

        if (!pCtx.value.cloud) {
            if (cloud) {
                await handleTurnProjectCloudOn();
                return;
            }

            pCtx.setValue({
                ...pCtx.value,
                projectName: name,
                projectBanner: banner,
                projectDescription: description,
            });

            console.log(
                `Updated project settings locally. (project-settings.view.tsx)`,
            );
            return;
        }

        const project = {
            ...pCtx.value,
            cloud: cloud,
            projectName: name,
            projectBanner: banner,
            projectDescription: description,
        };
        const result = await UpdateProject(project);
        setError(result.error);
        if (!result.error && result.data === null) {
            pCtx.setValue(project);
            nav('/editor/local');

            console.log(
                `Moved cloud project to local. (project-settings.view.tsx)`,
            );
        }
    };

    useEffect(() => {
        setCloud(pCtx.value.cloud);
        setName(pCtx.value.projectName);
        setBanner(pCtx.value.projectBanner);
        setDescription(pCtx.value.projectDescription);
    }, []);

    return (
        <ProjectSettingsContainer>
            <ProjectSettingsSectionTitle>
                Your Project
            </ProjectSettingsSectionTitle>

            <ProjectSettingsSection>
                <VerticalSplit>
                    <Pane
                        style={{
                            width: '30%',
                        }}
                    >
                        <p>Cloud</p>
                        <p>Name</p>
                        <p>Banner</p>
                        <p>Description</p>
                    </Pane>
                    <Pane
                        style={{
                            width: '70%',
                        }}
                    >
                        <Checkbox
                            type="checkbox"
                            checked={cloud}
                            onChange={e => setCloud(e.target.checked)}
                        />
                        <Input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <Input
                            type="text"
                            value={banner}
                            onChange={e => setBanner(e.target.value)}
                        />
                        <TextArea
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Pane>
                </VerticalSplit>

                <ErrorMessage>
                    WARNING: Setting CLOUD to OFF will delete the project from
                    the database! Please have a backup! This will also set your
                    local project to the current project, and redirect you to
                    the local editor.
                </ErrorMessage>

                {error !== null && (
                    <ErrorMessage>{error?.message}</ErrorMessage>
                )}

                <Button
                    config={{
                        style: 'primary',
                        inverted: false,
                    }}
                    onClick={handleSaveProjectSettings}
                >
                    Save
                </Button>
            </ProjectSettingsSection>
        </ProjectSettingsContainer>
    );
};

export default ProjectSettingsView;
