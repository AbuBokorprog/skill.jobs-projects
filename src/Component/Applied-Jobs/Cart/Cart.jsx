import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
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
    <div className="my-2 flex gap-8 border px-4 border-black py-6">
      <div>
        <img className="w-28 h-full" src={company_logo} alt="" />
      </div>
      <div>
        <h3>{job_title}</h3>
        <h4>{company_name}</h4>
        <div className="flex gap-5">
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
    </div>
  );
};

export default Cart;
