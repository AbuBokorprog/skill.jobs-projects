import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" px-5 container-lg mx-20 py-5 flex justify-between items-center">
      <p className="text-2xl font-medium">Skill.Jobs</p>
      <nav className="">
        <Link className="mx-5 text-slate-600" to="/">
          Home
        </Link>
        <Link className="mx-5 text-slate-600" to="statics">
          Statics
        </Link>
        <Link className="mx-5 text-slate-600" to="applied-jobs">
          Applied Jobs
        </Link>
        <Link className="mx-5 text-slate-600" to="blogs">
          Blogs
        </Link>
      </nav>
      <Link to="applying-button">
        <button className="btn btn-primary">Star Applying</button>
      </Link>
    </div>
  );
};

export default Header;
