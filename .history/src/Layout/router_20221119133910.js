import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Main from "./Main";


const router = createBrowserRouter([{
    path: '/',
    element: <Main/>,
    children: [
        {path: '/',element: <Home/>},
        {path: '/home',element: <Home/>},
        {path: '/appointment',element: <Appointment/>},
        {path: '/shop',element: <Shop/>},
    ]
}])
export default router;