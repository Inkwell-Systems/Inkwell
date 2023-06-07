import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';

const App = () => {
  const Routes: RouteObject[] = [
    // {path: '/', element: <Home />},
    // {path: '/sign/In', element: <SignIn />},
    // {path: '/sign/Up', element: <Index />},
    // {path: '*', element: <PageNotFound />},
  ];

  const router = createBrowserRouter(Routes);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
