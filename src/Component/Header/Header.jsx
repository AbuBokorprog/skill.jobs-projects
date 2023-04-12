import React, { useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import List from "./List/List";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const Navbar = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "Statics", link: "/statics" },
    { id: 3, title: "Applied Jobs", link: "/applied-jobs" },
    { id: 4, title: "Blogs", link: "/blogs" },
  ];

  return (
    <div className=" md:px-5 container-lg py-5 md:mx-20 flex justify-center items-center">
      <Link to="/">
        <p className="text-3xl font-semibold text-center text-pink-500">
          Skill.Jobs
        </p>
      </Link>
      <nav className="mx-5">
        <div onClick={() => setOpen(!open)} className="md:hidden">
          <span>
            {open === true ? (
              <XMarkIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-blue-500" />
            )}
          </span>
        </div>
        <ul
          className={`md:flex absolute md:static duration-50 md:justify-center md:items-center ${
            open ? "top-16 right-12" : "-top-48"
          }`}
        >
          {Navbar.map((n) => (
            <List key={n.id} nav={n}></List>
          ))}
        </ul>
      </nav>
      <Link to="applying-button">
        <button className="btn btn-primary">Star Applying</button>
      </Link>
    </div>
  );
};

export default Header;
