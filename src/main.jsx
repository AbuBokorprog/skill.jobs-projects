import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Menu from "./Component/Layout/Menu";
import Home from "./Component/Home/Home";
import Statics from "./Component/Statics/Statics";
import AppliedJobs from "./Component/Applied-Jobs/AppliedJobs";
import Blogs from "./Component/Blogs/Blogs";
import JobDetails from "./Component/JobDetails/JobDetails";
import jobsCart from "./Loader/jobsCart";
import ApplyDetails from "./Component/Applied-Jobs/ApplyDetails/ApplyDetails";
import ErrorPage from "./ErrorPgae/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu></Menu>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("Featured.json"),
      },
      {
        path: "/:featureId",
        element: <JobDetails></JobDetails>,
        loader: () => fetch(`Featured.json`),
      },
      {
        path: "statics",
        element: <Statics></Statics>,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: jobsCart,
      },
      {
        path: "applied-jobs:apply",
        element: <ApplyDetails></ApplyDetails>,
        loader: jobsCart,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
