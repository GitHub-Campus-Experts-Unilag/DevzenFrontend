import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";

export const router = createBrowserRouter([ 
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <SignIn />,
    },
])