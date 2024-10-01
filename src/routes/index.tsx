import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";

export const router = createBrowserRouter([ 
    {
        path: "/login",
        element: <SignIn />,
    },
])