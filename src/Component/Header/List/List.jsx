import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  const { title, link } = props.nav;
  return (
    <div>
      <li className="list-none mx-16">
        <Link to={link}>{title}</Link>
      </li>
    </div>
  );
};

export default List;
