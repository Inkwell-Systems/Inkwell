import PageForm from '../../../components/misc/page-form.component.tsx';
import UseUserProvider from '../../../hooks/user-provider/userProvider.hook.ts';
import Navigation from '../../../components/navigation/navigation.component.tsx';
import {SignContainer} from '../../../components/sign/sign.styles.tsx';
import {useState} from 'react';

const Projects = () => {
    const user = UseUserProvider();

    const [stage, setStage] = useState(0);

    const stages = [
        <PageForm
            addon={'+'}
            addonOnClick={() => setStage(1)}
            styles={{}}
            title={'PROJECTS'}
        >
            <h1>aaaaaa</h1>
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
