import React from "react";

const Banner = () => {
  return (
    <div className="container-lg py-5 h-full md:mx-20 md:flex sm:flex-col md:flex-row items-center">
      {/* banner details */}
      <div className="w-full">
        <h1 className="text-6xl font-bold sm:mx-0 md:mx-20">
          One Step Closer To Your{" "}
          <span className="text-sky-500">Dream Job</span>
        </h1>
        <p className="sm:mx-0 md:mx-20 sm:px-4 md:px-0">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="md:mx-20 btn bg-gradient-to-r from-cyan-500 to-blue-500">
          Get Started
        </button>
      </div>
      {/* banner img */}
      <div>
        <img className="" src="All Images/P3OLGJ1 copy 1.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
