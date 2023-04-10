import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";

const Home = () => {
  const category = useLoaderData();
  console.log(category);
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default Home;
