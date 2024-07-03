import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import HomePage from '../pages/HomePage';
import generateRoutes from '../utils/generateRoutes';
import { adminRoutes } from './router.admin';
import Login from '../pages/Login';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },
    {
        path: '/admin',
        element: <RootPage />,
        children: generateRoutes(adminRoutes)
    },
    {
        path:'/login',
        element:<Login/>
    }
])


export default router;