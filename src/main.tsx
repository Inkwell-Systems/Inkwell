import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouteObject,
    RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/home/home.page.tsx'
import PageNotFound from './pages/_pageNotFound/_pageNotFound.tsx'

const routes: RouteObject[] = [
    { path: '/', element: <HomePage /> },
    { path: '*', element: <PageNotFound /> },
]
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
