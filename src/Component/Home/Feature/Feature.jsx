import React from "react";

const Feature = ({ feature }) => {
  console.log(feature);
  const {
    id,
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    salary,
    fulltime_or_parttime,
  } = feature;
  return (
    <div className=" border py-3 px-5 border-gray-400">
      <img className="img-full w-40" src={company_logo} alt="logo" />
      <h3 className="text-2xl font-medium">{job_title}</h3>
      <h3 className="text-xl">{company_name}</h3>
      <div className="flex gap-2">
        <button className="text-blue-400 outline-blue-400">
          <p>{remote_or_onsite}</p>
        </button>
        <button className="text-blue-400 outline-blue-400">
          <p>{fulltime_or_parttime}</p>
        </button>
      </div>
      <div className="flex gap-4">
        <p>{location}</p>
        <p>{salary}</p>
      </div>
      <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500">
        View Details
      </button>
    </div>
  );
};

export default Feature;
