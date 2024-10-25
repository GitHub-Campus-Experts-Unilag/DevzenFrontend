import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "@/layout/layout";
import SignIn from "../pages/auth/SignIn";
import CronJobParser from "@/components/generators/CronJobParser";
import URLParser from "../pages/auth/url_parser";
import { Feedback } from "../pages/Feedback";
import { StringConverter } from "@/components/converters/StringConverter";

export const router = createBrowserRouter([
  {
    path: "/url_parser",
    element: (
      <Layout>
        <URLParser />
      </Layout>
    ),
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
    element: <Feedback />,
  },
  {
    path: "/stringcase",
    element: <StringConverter />,
  },
  {
    path: "cron_job_parser",
    element: (
      <Layout>
        <CronJobParser />
      </Layout>
    ),
  },
]);
