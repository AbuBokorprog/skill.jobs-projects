import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
  console.log(featureDetails);
  const {
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
    <div className="container-lg mx-20 my-10">
      <h2 className="text-center text-3xl font-medium mb-5">Job Details</h2>
      <div className="flex gap-5 ">
        {/* description */}
        <div>
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
          <button className="text-center btn bg-gradient-to-r from-purple-500 to-pink-500 px-20">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
