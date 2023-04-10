import React from "react";

const Category = ({ category }) => {
  console.log(category);
  const { logo, name, jobs_available } = category;
  return (
    <div className="container-lg mx-20">
      <div className="w-50 h-40 card px-4 py-5 mb-5 bg-base-500 shadow-xl">
        <img className="w-10" src={logo} alt="" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-slate-400">
          <small>Jobs Available:{jobs_available}</small>
        </p>
      </div>
    </div>
  );
};

export default Category;
