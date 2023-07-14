import {useParams} from 'react-router-dom';
import React, {ReactElement, useEffect, useState} from 'react';
import UseProjectProvider from '../../hooks/project-provider/project-provider.hook.ts';

// TODO(calco): REMOVE THIS IN PRODUCTION
import projectJsonRaw from './sampleProject.json?raw';

import {LoadProjectFromJson} from '../../../types';
import UnableToLoadProject from '../../components/editor/unable-to-load-project/unable-to-load-project.component.tsx';
import EditorSidebar from '../../components/editor/sidebar/sidebar.component.tsx';
import styled from 'styled-components';

const EditorContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    z-index: 0;

    background-color: #131315;
`;

const MainPanel = styled.div`
    width: 100%;
    height: 100%;

    padding: 2rem;
`;

const TinyProjectTitle = styled.h1`
    font-size: 0.9rem;
    font-weight: 400;
    color: #b4b4b4;

    margin-bottom: 3rem;
`;

const BigProjectTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    color: #b4b4b4;
`;

const Separator = styled.hr`
    border: 2px solid #48484a;
    margin-bottom: 1rem;
    border-radius: 1rem;
    width: 100%;
`;

const Editor = () => {
    const {id} = useParams();
    const pCtx = UseProjectProvider();

    const [element, setElement] = useState<ReactElement | null>(null);

    // TODO(calco): Should add a timestamp to the project and check if it's outdated
    useEffect(() => {
        if (id === 'local' || pCtx.value.projectId === id) return;

        const project = LoadProjectFromJson(projectJsonRaw);
        pCtx.setValue(project);
    }, []);

    return (
        <EditorContainer>
            {pCtx.value === null ? (
                <UnableToLoadProject />
            ) : (
                <>
                    <EditorSidebar setElement={setElement} />
                    <MainPanel>
                        <TinyProjectTitle>
                            {pCtx.value.projectName}
                        </TinyProjectTitle>

                        <BigProjectTitle>
                            {pCtx.value.projectName}
                        </BigProjectTitle>
                        <Separator />
                        {element !== null && element}
                    </MainPanel>
                </>
            )}
        </EditorContainer>
    );
};

export default Editor;
