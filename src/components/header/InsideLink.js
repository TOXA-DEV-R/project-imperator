import React from "react";
import { Link } from "react-router-dom";

const InsideLink = ({ links }) => {
  return (
    <ul>
      {links.map((item, i) => (
        <li key={i}>
          <Link to={item.path}>{item.linkName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default InsideLink;
