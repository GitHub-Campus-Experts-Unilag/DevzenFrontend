import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "@/layout/layout";
import SignIn from "../pages/auth/SignIn";
import CsvToJson from "../components/converters/csvToJson";
import URLParser from "../components/converters/url_parser";
import { Feedback } from "../pages/Feedback";
import { StringConverter } from "@/components/converters/StringConverter";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/url_parser",
        element: (
            <Layout>
                <URLParser/>
            </Layout>
        )
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
    },
    {
        path: "/stringcase",
        element: <StringConverter />
    }
])