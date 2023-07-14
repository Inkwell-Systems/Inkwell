import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import UseProjectProvider from '../../../../hooks/project-provider/project-provider.hook.ts';
import {Button} from '../../../inputs/button/button.component.tsx';

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
    const pCtx = UseProjectProvider();

    const [cloud, setCloud] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [banner, setBanner] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const handleSaveProjectSettings = async () => {};

    useEffect(() => {
        setCloud(true);
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
