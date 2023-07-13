import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom';
import Home from './react/pages/home/home.page';
import {ScrollProvider} from './react/contexts/scroll-provider/scroll-provider.ctx.tsx';
import PageNotFound from './react/pages/page-not-found/page-not-found.page.tsx';
import SignIn from './react/pages/sign/in/sign-in.page.tsx';
import SignUp from './react/pages/sign/ouut/sign-up.page.tsx';

const App = () => {
    const Routes: RouteObject[] = [
        {path: '/', element: <Home />},
        {path: '/sign/in', element: <SignIn />},
        {path: '/sign/Up', element: <SignUp />},
        {path: '*', element: <PageNotFound />},
    ];

    const router = createBrowserRouter(Routes);

    return (
        <div className="App">
            <ScrollProvider>
                <RouterProvider router={router} />
            </ScrollProvider>
        </div>
    );
};

export default App;
