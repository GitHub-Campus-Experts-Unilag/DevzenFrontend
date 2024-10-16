import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import URLParser from "../pages/auth/url_parser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <URLParser/>,
    }, 
    {
        path: "/login",
        element: <SignIn />,
    },
    
])