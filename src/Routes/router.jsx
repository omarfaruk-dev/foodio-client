import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import AllFoods from "../pages/AllFoods/AllFoods";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";
import AddFoodsForm from "../pages/AddFoods/AddFoodsForm";


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
                path: 'signup',
                Component: SignUp,
            },
            {
                path: 'my-profile',
                Component: MyProfile,
            },
            {
                path: '/all-foods',
                loader: () =>fetch('http://localhost:3000/foods').then(res=>res.json()),
                Component: AllFoods,
            },
            {
                path: 'add-foods',
                element: <AddFoodsForm/>,
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