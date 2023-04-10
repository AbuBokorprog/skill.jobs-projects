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
import Details from "./Component/Home/Feature/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu></Menu>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("Featured.json"),
      },
      {
        path: "/:featureId",
        element: <Details></Details>,
        loader: () => fetch(`Featured.json`),
      },
      {
        path: "statics",
        element: <Statics></Statics>,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
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
