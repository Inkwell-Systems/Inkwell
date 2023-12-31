import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom';
import Home from './react/pages/home/home.page';
import PageNotFound from './react/pages/page-not-found/page-not-found.page.tsx';
import SignIn from './react/pages/sign/in/sign-in.page.tsx';
import SignUp from './react/pages/sign/ouut/sign-up.page.tsx';
import Projects from './react/pages/editor/projects/projects.page.tsx';
import Editor from './react/pages/editor/editor.page.tsx';
import {UserProvider} from './react/contexts/user-provider/user-provider.ctx.tsx';
import {ProjectProvider} from './react/contexts/project-provider/project-provider.ctx.tsx';
import Account from './react/pages/account/account.page.tsx';
import Invitations from './react/pages/invitations/invitations.page.tsx';

const App = () => {
    const Routes: RouteObject[] = [
        {path: '/', element: <Home />},
        {path: '/sign/in', element: <SignIn />},
        {path: '/sign/up', element: <SignUp />},
        {path: '/projects', element: <Projects />},
        {path: '/editor/:id', element: <Editor />},
        {path: '/account', element: <Account />},
        {
            path: '/invite/:projectId/:projectInviteKey',
            element: <Invitations />,
        },
        {path: '*', element: <PageNotFound />},
    ];

    const router = createBrowserRouter(Routes);

    return (
        <div className="App">
            <UserProvider>
                <ProjectProvider>
                    <RouterProvider router={router} />
                </ProjectProvider>
            </UserProvider>
        </div>
    );
};

export default App;
