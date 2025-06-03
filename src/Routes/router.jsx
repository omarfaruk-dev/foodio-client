import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import AllFoods from "../pages/AllFoods/AllFoods";


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                path: '/',
                Component: Home,
            },
            {
                path: 'login',
                Component: Login,
            },
            {
                path: '/all-foods',
                Component: AllFoods,
            },
            {
                path: '/contact',
                element: <h2>Contact Page</h2>            
            },
            {
                path: '*',
                Component: ErrorPage
            }
        ]
    }
])


export default router;