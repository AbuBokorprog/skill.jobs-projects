import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <img
        className="h-96 mx-auto"
        src="/public/All Images/3819627.jpg"
        alt=""
      />
      <div className="">
        <Link to="/">
          <button className="btn bg-gradient-to-r from-purple-500 to-red-500">
            Back Home Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
