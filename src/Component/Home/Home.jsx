import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";

const Home = () => {
  const categories = useLoaderData();
  //console.log(category);
  return (
    <>
      <Banner></Banner>
      {/* Category */}
      <div className="grid grid-cols-4 py-10">
        {categories.map((c) => (
          <Category category={c} key={c.id}></Category>
        ))}
      </div>
    </>
  );
};

export default Home;
