import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  NavbarLeft,
  NavbarNav,
  NavbarNavItem,
  NavbarNavList,
} from "./HeaderStyle";
import Logo from "../../assets/images/Logo_1.svg";
import HeaderData from "./HeaderData";
import InsideList from "./InsideLink";

const NavbarLeftRow = () => {
  const [navbarItemId, setNavbarItemId] = useState(null);

  const navbarLinkOver = (id) => {
    setNavbarItemId(id);
  };

  return (
    <NavbarLeft className="navbar__left">
      <Link to="/" className="navbar-brand">
        <img src={Logo} alt="logo" />
      </Link>
      <NavbarNav className="navbar-nav">
        <NavbarNavList className="navbar-nav__list">
          {HeaderData.map((item) => (
            <NavbarNavItem key={item.id} className="navbar-nav__item">
              <button type="button" onMouseOver={() => navbarLinkOver(item.id)}>
                {item.label}
              </button>
              {item.id === navbarItemId ? (
                <InsideList links={item.links} />
              ) : null}
            </NavbarNavItem>
          ))}
        </NavbarNavList>
      </NavbarNav>
    </NavbarLeft>
  );
};

export default NavbarLeftRow;
