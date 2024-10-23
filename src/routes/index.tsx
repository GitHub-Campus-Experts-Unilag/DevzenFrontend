import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/layout/layout";

import Home from "@/pages/Home";
import SignIn from "@/pages/auth/SignIn";
import Feedback from "@/pages/Feedback";

// Quick Sketch
import Zenboard from "@/pages/quick-sketch/zenboard";

// Formatters
import JSONFormatter from "@/pages/formatters/json-formatter";
import SQLFormatter from "@/pages/formatters/sql-formatter";
import MarkdownFormatter from "@/pages/formatters/markdown-formatter";

// Converters
import URLParser from "@/pages/converters/url-parser";
import NumberBaseConverter from "@/pages/converters/number-base-converter";
import StringCaseConverter from "@/pages/converters/string-case-converter";
import GostructToTypescriptInterfaces from "@/pages/converters/gostruct-to-typescript-interfaces";
import CSVToJSON from "@/pages/converters/csv-to-json";

// Generators
import JWTDebugger from "@/pages/generators/jwt-debugger";
import RegExpTester from "@/pages/generators/regexp-tester";
import CronJobParser from "@/pages/generators/cron-job-parser";
import HTMLPreview from "@/pages/generators/html-preview";


export const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: "quick-sketch",
                children: [
                    {
                        index: true,
                        element: <Zenboard />
                    },
                    {
                        path: "zenboard",
                        element: <Zenboard />
                    }
                ]
            }, {
                path: "formatters",
                children: [
                    {
                        index: true,
                        element: <JSONFormatter />
                    },
                    {
                        path: "json",
                        element: <JSONFormatter />
                    },
                    {
                        path: "sql",
                        element: <SQLFormatter />
                    },
                    {
                        path: "markdown",
                        element: <MarkdownFormatter />
                    }
                ]
            }, {
                path: "converters",
                children: [
                    {
                        index: true,
                        element: <URLParser />
                    },
                    {
                        path: "url-parser",
                        element: <URLParser />
                    },
                    {
                        path: "number-base-converter",
                        element: <NumberBaseConverter />
                    },
                    {
                        path: "string-case-converter",
                        element: <StringCaseConverter />
                    },
                    {
                        path: "gostruct-to-typescript-interfaces",
                        element: <GostructToTypescriptInterfaces />
                    },
                    {
                        path: "csv-to-json",
                        element: <CSVToJSON />
                    },
                ]
            }, {
                path: "generators",
                children: [
                    {
                        index: true,
                        element: <JWTDebugger />
                    },
                    {
                        path: "jwt-debugger",
                        element: <JWTDebugger />
                    },
                    {
                        path: "regexp-tester",
                        element: <RegExpTester />
                    },
                    {
                        path: "cron-job-parser",
                        element: <CronJobParser />
                    },
                    {
                        path: "html-preview",
                        element: <HTMLPreview />
                    },
                ]
            }
        ]

    },
    {
        path: "login",
        element: <SignIn />,
    },
    {
        path: "feedback",
        element: <Feedback />
    }
])