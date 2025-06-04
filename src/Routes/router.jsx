import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import AllFoods from "../pages/AllFoods/AllFoods";
import SignUp from "../pages/SignUp";
import MyProfile from "../pages/MyProfile";
import AddFoodsForm from "../pages/AddFoods/AddFoodsForm";
import FoodDetails from "../pages/FoodDetails";
import Spinner from "../pages/shared/Spinner";


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
                hydrateFallbackElement: <Spinner/>,
                loader: () =>fetch('http://localhost:3000/foods'),
                Component: AllFoods,
            },
            {
                path: '/item-details/:id',
                hydrateFallbackElement: <Spinner/>,
                loader: ({params}) => fetch(`http://localhost:3000/foods/${params.id}`),
                Component: FoodDetails,

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