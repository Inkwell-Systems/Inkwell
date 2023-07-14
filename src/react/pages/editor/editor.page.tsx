import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
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

    background-color: #131315;
`;

const Editor = () => {
    const {id} = useParams();

    const pCtx = UseProjectProvider();

    useEffect(() => {
        // TODO(calco): Load the project from the API
        if (id === 'local') return;

        const project = LoadProjectFromJson(projectJsonRaw);
        pCtx.setValue(project);
    }, []);

    return (
        <EditorContainer>
            {pCtx.value === null ? (
                <UnableToLoadProject />
            ) : (
                <>
                    <EditorSidebar />
                    <h1>Editing: {pCtx.value.projectName}</h1>
                </>
            )}
        </EditorContainer>
    );
};

export default Editor;
