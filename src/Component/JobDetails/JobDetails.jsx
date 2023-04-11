import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const details = useParams();
  const IdDetails = details.featureId;
  //console.log(IdDetails);
  const jobs = useLoaderData();
  //console.log(jobs);
  const [featureDetails, setFeatureDetails] = useState({});

  useEffect(() => {
    const singleDetails = jobs.find((d) => d.id === IdDetails);
    setFeatureDetails(singleDetails);
  }, []);
  //console.log(featureDetails);

  const ApplyHandler = (circular) => {
    console.log(circular);
    addToDb(circular);
  };

  const {
    id,
    job_title,
    phone,
    educational_requirements,
    experiences,
    job_description,
    job_responsibility,
    location,
    email,
    salary,
  } = featureDetails;
  return (
    <div className="">
      <div className="text-center flex justify-around items-center bg-slate-300">
        <img className="w-44" src="All Images/Vector.png" alt="" />
        <h2 className="text-4xl font-semibold">Job Details</h2>
        <img className="w-44" src="All Images/Vector-1.png" alt="" />
      </div>
      <div className="flex gap-5 container-lg mx-20 my-10">
        {/* description */}
        <div className="bg-pink-100 px-4 rounded-xl">
          <p className="my-4">
            <span className="font-bold">Job Description:</span>
            {job_description}
          </p>
          <p className="my-4">
            <span className="font-bold">Job Responsibility:</span>
            {job_responsibility}
          </p>
          <p className="my-4">
            <span className="font-bold">Educational Requirements:</span> <br />
            {educational_requirements}
          </p>
          <p className="my-4">
            <span className="font-bold">Experiences:</span> <br />
            {experiences}
          </p>
        </div>
        {/* job details */}
        <div className="bg-sky-300 w-80 px-8 rounded-xl py-5">
          <p className="font-semibold">Job Details</p>
          <hr className="border-gray-500 my-3" />
          <p className="my-4">
            <span className="font-bold">Salary:</span>
            {salary}
          </p>
          <p className="my-4">
            <span className="font-bold">Job title:</span>
            {job_title}
          </p>
          <p className="my-4">
            <span className="font-bold">Contact Information</span>
          </p>
          <hr className="border-gray-500 my-3" />
          <p className="my-4">
            <span className="font-bold">Phone:</span>
            {phone}
          </p>
          <p className="my-4">
            <span className="font-bold">Email:</span>
            {email}
          </p>
          <p className="my-4">
            <span className="font-bold">Address:</span>
            {location}
          </p>
          <button
            onClick={() => ApplyHandler(id)}
            className="text-center btn bg-gradient-to-r from-purple-500 to-pink-500 px-20"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
