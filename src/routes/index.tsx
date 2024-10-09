import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import { Feedback } from "../pages/Feedback";

export const router = createBrowserRouter([ 
    {
        path: "/login",
        element: <SignIn />,
    },
    {
        path: "/feedback",
        element: <Feedback />
    }
])