import {useParams} from 'react-router-dom';
import React, {ReactElement, useEffect, useState} from 'react';
import UseProjectProvider from '../../hooks/project-provider/project-provider.hook.ts';
import UnableToLoadProject from '../../components/editor/unable-to-load-project/unable-to-load-project.component.tsx';
import EditorSidebar from '../../components/editor/sidebar/sidebar.component.tsx';
import styled from 'styled-components';
import {
    DatabaseProjectToIProject,
    SubscribeToProject,
} from '../../../firebase/database';

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

    display: flex;
    flex-direction: column;

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

    useEffect(() => {
        if (id === 'local') {
            if (pCtx.value.cloud) {
                const localProject = localStorage.getItem('project');
                if (localProject === null) {
                    console.log('No local project found');
                    return;
                }

                pCtx.setValue(JSON.parse(localProject));
                console.log('Loaded local project from storage.');
            }

            return;
        }

        const unsub = SubscribeToProject(id, snapshot => {
            console.log(
                `Project ${id} updated. Updating context. (OnValue Callback) (editor.page.tsx)`,
            );

            const project = DatabaseProjectToIProject(snapshot);
            pCtx.setValue(project);
        });
        console.log(`Subscribing to project ${id} (editor.page.tsx)`);

        return () => {
            console.log(`Unsubscribing from project ${id} (editor.page.tsx)`);
            unsub();
        };
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
