import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "@/layout/layout";
import SignIn from "../pages/auth/SignIn";

import URLParser from "../pages/auth/url_parser";
import { Feedback } from "../pages/Feedback";


export const router = createBrowserRouter([
    {
        path: "/url_parser",
        element: (
            <Layout>
                <URLParser/>
            </Layout>
        )
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
    }
])