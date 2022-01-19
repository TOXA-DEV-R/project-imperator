import React from "react";
import { Link } from "react-router-dom";
import { NavbarLeft, NavbarMenu } from "./HeaderStyle";
import Logo from "../../assets/images/Logo_1.svg";
import HeaderData from "./HeaderData";
import InsideLink from "./InsideLink";

const HeaderLeft = () => {
  return (
    <NavbarLeft className="navbar__left">
      <Link to="/" className="navbar__logo">
        <img src={Logo} alt="logo" />
      </Link>
      <NavbarMenu className="navbar__menu">
        <ul className="navbar__list">
          {HeaderData.map((item, i) => (
            <li key={i} className="navbar__link">
              <Link to={item.path}>{item.name}</Link>
              {/* <InsideLink links={item.links} /> */}
            </li>
          ))}
        </ul>
      </NavbarMenu>
    </NavbarLeft>
  );
};

export default HeaderLeft;
