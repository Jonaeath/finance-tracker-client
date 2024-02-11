import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../UserFile/Login/Login";
import SignUp from "../UserFile/SignUp/SignUp";
import DashBoard from "../Component/Pages/DashBoard/DashBoard";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            },
            {
                path:'/dashboard',
                element:<DashBoard/>
            }
        ]
    }
])