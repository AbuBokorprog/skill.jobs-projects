import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart/Cart";

const AppliedJobs = () => {
  const cartJobs = useLoaderData();
  //console.log(cartJobs);
  return (
    <div className="">
      <div className=""></div>
      <div className="text-center flex justify-around items-center bg-slate-300">
        <img className="w-44" src="All Images/Vector.png" alt="" />
        <h2 className="text-4xl font-semibold">Applied Jobs</h2>
        <img className="w-44" src="All Images/Vector-1.png" alt="" />
      </div>
      <div className="flex container-lg h-full flex-col mx-20 my-20 gap-5 justify-center">
        {cartJobs.map((cart) => (
          <Cart cart={cart} key={cart.id}></Cart>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
