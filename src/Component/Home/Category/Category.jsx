import React from "react";

const Category = ({ category }) => {
  //console.log(category);
  const { logo, name, jobs_available } = category;
  return (
    <div className="container-lg md:mx-20 h-full">
      <div className="card px-4 py-5 mb-5 bg-red-200 shadow-xl">
        <img className="w-10" src={logo} alt="" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-slate-500 font-medium">
          <small>Jobs Available:{jobs_available}</small>
        </p>
      </div>
    </div>
  );
};

export default Category;
