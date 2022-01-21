import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarLeft, NavbarMenu } from "./HeaderStyle";
import Logo from "../../assets/images/Logo_1.svg";
import HeaderData from "./HeaderData";
import InsideList from "./InsideLink";

const HeaderLeft = () => {
  const [navbarLinId, setNavbarLinId] = useState(null);

  const navbarLinkOver = (id) => {
    setNavbarLinId(id);
  };

  return (
    <NavbarLeft className="navbar__left">
      <Link to="/" className="navbar__logo">
        <img src={Logo} alt="logo" />
      </Link>
      <NavbarMenu className="navbar__menu">
        <ul className="navbar__list">
          {HeaderData.map((item) => (
            <li key={item.id} className="navbar__link">
              <button type="button" onMouseOver={() => navbarLinkOver(item.id)}>
                {item.label}
              </button>
              {item.id === navbarLinId ? (
                <InsideList links={item.links} />
              ) : null}
            </li>
          ))}
        </ul>
      </NavbarMenu>
    </NavbarLeft>
  );
};

export default HeaderLeft;
