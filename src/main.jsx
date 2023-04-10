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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu></Menu>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
