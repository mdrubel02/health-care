import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Shop from "../Pages/Shop/Shop";
import SingUp from "../Pages/SingUp/SingUp";
import Main from "./Main";


const router = createBrowserRouter([{
    path: '/',
    element: <Main/>,
    children: [
        {path: '/',element: <Home/>},
        {path: '/home',element: <Home/>},
        {path: '/appointment',element: <Appointment/>},
        {path: '/shop',element: <Shop/>},
        {path: '/login',element: <Login/>},
        {path: '/signUp',element: <SingUp/>},
      
    ]
}])
export default router;