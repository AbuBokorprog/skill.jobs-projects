import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  console.log(details);
  /* const [featureD, setFeatureD] = useState([]);
  useEffect(() => {
    fetch("Featured.json")
      .then((res) => res.json())
      .then((data) => setFeatureD(data));
  }, []); */

  return (
    <div>
      <h2>Details page welcome</h2>
    </div>
  );
};

export default Details;
