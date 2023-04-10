import React from "react";

const Banner = () => {
  return (
    <div className="container-lg py-5 h-full mx-20 flex items-center">
      {/* banner details */}
      <div className="w-full">
        <h1 className="text-6xl font-bold mx-20">
          One Step Closer To Your{" "}
          <span className="text-sky-500">Dream Job</span>
        </h1>
        <p className="mx-20">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="mx-20 btn bg-gradient-to-r from-cyan-500 to-blue-500">
          Get Started
        </button>
      </div>
      {/* banner img */}
      <div>
        <img
          className=""
          src="https://img.freepik.com/free-photo/man-holding-something_1368-3677.jpg?w=826&t=st=1681103458~exp=1681104058~hmac=5ae66984000fa3bdcb95e2dbc1b2d7c6d4a450cc04a2e180dd6f6c33a1ad821d"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
