import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/auth/SignIn";

import URLParser from "../pages/auth/url_parser";
import { Feedback } from "../pages/Feedback";
import { StringConverter } from "@/components/converters/StringConverter";


export const router = createBrowserRouter([
    {
        path: "/url_parser",
        element: <URLParser/>,
    }, 
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <SignIn />,
    },
    {
        path: "/feedback",
        element: <Feedback />
    },
    {
        path: "/stringcase",
        element: <StringConverter />
    }

])