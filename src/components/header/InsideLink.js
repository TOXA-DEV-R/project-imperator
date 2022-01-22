import React from "react";
import { Link } from "react-router-dom";
import { NavbarInsideLink, NavbarInsideList } from "./HeaderStyle";

const InsideList = ({ links }) => {
  return (
    <NavbarInsideList className="navbar-inside__list">
      {links.map((item, i) => (
        <NavbarInsideLink key={i} className="navbar-inside__link">
          <Link to={item.path}>{item.linkName}</Link>
        </NavbarInsideLink>
      ))}
    </NavbarInsideList>
  );
};

export default InsideList;
