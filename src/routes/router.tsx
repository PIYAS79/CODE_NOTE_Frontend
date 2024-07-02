import {createBrowserRouter} from 'react-router-dom';
import RootPage from '../pages/RootPage';
import HomePage from '../pages/HomePage';
import { adminRouter } from './router.admin';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage/>,
        children:[
            {
                index:true,
                element: <HomePage/>
            }
        ]
    },
    {
        path:'/admin',
        element:<RootPage/>,
        children: adminRouter
    }
])


export default router;