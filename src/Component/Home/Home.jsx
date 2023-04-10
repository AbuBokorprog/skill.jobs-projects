import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Feature from "./Feature/Feature";

const Home = () => {
  const categories = useLoaderData();
  //console.log(category);
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("Featured.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);
  let button;
  let feature;
  if (features.length === 6) {
    button = (
      <div className="mx-auto text-center ">
        <button className="btn bg-gradient-to-r from-sky-500 to-indigo-500">
          show more
        </button>
      </div>
    );
    feature = features.slice(0, 4);
  }
  return (
    <>
      <Banner></Banner>
      {/* Category */}
      <div className=" container-lg text-center font-semibold mt-10">
        <h2 className="text-3xl text-pink-500">Job Category List</h2>
        <p className="text-center mt-2 text-slate-500">
          <small>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </p>
        <div className="grid grid-cols-4 my-10">
          {categories.map((c) => (
            <Category category={c} key={c.id}></Category>
          ))}
        </div>
      </div>
      {/* Features */}
      <div className=" container-lg text-center font-semibold mt-10">
        <h2 className="text-3xl">Featured Jobs</h2>
        <p className="text-center mt-2 text-slate-500">
          <small>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </small>
        </p>
      </div>
      <div className="container-lg mx-20 grid grid-cols-2 my-10 gap-5">
        {features.slice(0, 4).map((f) => (
          <Feature feature={f} key={f.id}></Feature>
        ))}
      </div>
      {button}
    </>
  );
};

export default Home;
