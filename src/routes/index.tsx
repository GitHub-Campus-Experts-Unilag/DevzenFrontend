import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";
import CsvToJson from "../components/converters/csvToJson";
import URLParser from "../components/converters/url_parser";
import { Feedback } from "../pages/Feedback";


export const router = createBrowserRouter([
    {
        path: "/url_parser",
        element: <URLParser/>,
    }, 
    {
        path: "/csv_to_json",
        element: <CsvToJson/>,
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