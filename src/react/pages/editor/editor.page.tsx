import {useParams} from 'react-router-dom';
import {useEffect} from 'react';
import UseProjectProvider from '../../hooks/project-provider/project-provider.hook.ts';

// TODO(calco): REMOVE THIS IN PRODUCTION
import projectJsonRaw from './sampleProject.json?raw';

import {LoadProjectFromJson} from '../../../types';
import UnableToLoadProject from '../../components/editor/unable-to-load-project/unable-to-load-project.component.tsx';

const Editor = () => {
    const {id} = useParams();

    const pCtx = UseProjectProvider();

    useEffect(() => {
        // TODO(calco): Load the project from the API
        const project = LoadProjectFromJson(projectJsonRaw);
        pCtx.setValue(project);
    }, []);

    return (
        <>${pCtx.value === null ? <UnableToLoadProject /> : <h1>Editor</h1>}</>
    );
};

export default Editor;
