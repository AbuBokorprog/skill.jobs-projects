import React from "react";

const Banner = () => {
  return (
    <div className="container-lg mx-20 flex items-center gap-10">
      {/* banner details */}
      <div>
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
          tenetur.
        </h2>
      </div>
      {/* banner img */}
      <div>
        <img
          src="https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-AbuBokorprog/main/src/assets/react.svg?token=GHSAT0AAAAAAB3YVZTBIQAMUICYYS2HTJ7KZBTU5AA"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
