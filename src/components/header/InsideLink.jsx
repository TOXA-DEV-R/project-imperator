import React from "react";
import { Link } from "react-router-dom";

const InsideList = ({ links }) => {
  return (
    <ul className="navbar-inside__list">
      {links.map((item, i) => (
        <li key={i} className="navbar-inside__link">
          <Link to={item.path}>{item.linkName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default InsideList;
