import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "./Cart/Cart";

const AppliedJobs = () => {
  const cartJobs = useLoaderData();
  //console.log(cartJobs);
  return (
    <div className="container-lg mx-20 my-10">
      <div className="text-center">
        <h2 className="text-4xl font-semibold">Applied Jobs</h2>
      </div>
      <div className="flex h-full flex-col mx-20 my-20 gap-5 justify-center">
        {cartJobs.map((cart) => (
          <Cart cart={cart} key={cart.id}></Cart>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
