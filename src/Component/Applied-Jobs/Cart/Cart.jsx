import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  //console.log(cart);
  const {
    id,
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    salary,
    fulltime_or_parttime,
  } = cart;
  return (
    <div className="flex gap-8 border px-4 border-black py-2">
      <div>
        <img className="w-28 h-full" src={company_logo} alt="" />
      </div>
      <div className="w-96 px-1">
        <h3>{job_title}</h3>
        <h4>{company_name}</h4>
        <div className="flex gap-2">
          <button className="text-blue-400 border-blue-400">
            {remote_or_onsite}
          </button>
          <button className="text-blue-400 border-blue-400">
            {fulltime_or_parttime}
          </button>
        </div>
        <div className="flex gap-5">
          <p>{location}</p>
          <p>{salary}</p>
        </div>
      </div>
      <div className="my-auto ml-auto">
        <Link to={`/${id}`}>
          <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
