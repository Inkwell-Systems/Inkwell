import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import UseProjectProvider from '../../../../hooks/project-provider/project-provider.hook.ts';
import {Button} from '../../../inputs/button/button.component.tsx';
import {
    CreateProjectInDatabase,
    DeleteProject,
    UpdateProject,
} from '../../../../../firebase';
import {ErrorMessage} from '../../../../../styles/utils.styles.tsx';
import {useNavigate} from 'react-router-dom';
import UseUserProvider from '../../../../hooks/user-provider/userProvider.hook.ts';
import {
    EditorElementContainer,
    EditorSectionContainer,
    EditorSectionTitle,
} from '../utils.tsx';
import {GetProjectInviteCode} from '../../../../../types';

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
        min-height: 1.75rem;
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
            pCtx.value.scopes,
            pCtx.value.tables,
            pCtx.value.entryMap,
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

    const handleCopyProjectCode = () => {
        const code = GetProjectInviteCode(pCtx.value);
        navigator.clipboard.writeText(code);
    };

    const handleDeleteProject = async () => {
        if (!pCtx.value.cloud) {
            localStorage.setItem('project', null);
        } else {
            if (pCtx.value.owner === uCtx.value.id)
                await DeleteProject(pCtx.value);
        }

        nav('/projects');
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

        if (uCtx.value.id !== pCtx.value.owner && !cloud) {
            setError(
                new Error('Only the owner of the project can take it down!'),
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
            project.members = [];
            project.owner = uCtx.value.id;
            project.cloud = false;
            project.inviteCode = '';

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
        <EditorElementContainer>
            <EditorSectionTitle>Your Project</EditorSectionTitle>

            <EditorSectionContainer>
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
            </EditorSectionContainer>

            <EditorSectionTitle>Project Info</EditorSectionTitle>
            <EditorSectionContainer>
                <Button
                    config={{
                        style: 'secondary',
                        inverted: true,
                    }}
                    onClick={handleCopyProjectCode}
                >
                    Copy Invite Code
                </Button>
            </EditorSectionContainer>

            {(pCtx.value.owner === uCtx.value.id || !pCtx.value.cloud) && (
                <>
                    <EditorSectionTitle>Management</EditorSectionTitle>
                    <EditorSectionContainer>
                        <Button
                            config={{
                                style: 'danger',
                                inverted: false,
                            }}
                            onClick={handleDeleteProject}
                        >
                            DELETE PROJECT
                        </Button>
                    </EditorSectionContainer>
                </>
            )}
        </EditorElementContainer>
    );
};

export default ProjectSettingsView;
