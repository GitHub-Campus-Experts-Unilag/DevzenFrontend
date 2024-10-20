import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";

import URLParser from "../pages/auth/url_parser";
import { Feedback } from "../pages/Feedback";


export const router = createBrowserRouter([
    {
        path: "/url_parser",
        element: <URLParser/>,
    }, 
    {
        path: "/login",
        element: <SignIn />,
    },
    {
        path: "/feedback",
        element: <Feedback />
    }

])