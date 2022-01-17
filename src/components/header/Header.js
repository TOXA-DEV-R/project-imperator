import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarLeft, NavbarRight, NavbarMenu } from "./HeaderStyle";
import Logo from "../../assets/images/Logo_1.svg";
import HeaderData from "./HeaderData";
import InsideLink from "./InsideLink";
import { BiPlusMedical } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar className="navbar">
      <div className="navbar__container">
        <NavbarLeft className="navbar__left">
          <Link to="/" className="navbar__logo">
            <img src={Logo} alt="logo" />
          </Link>
          <NavbarMenu className="navbar__menu">
            <ul className="navbar__list">
              {HeaderData.map((item, i) => (
                <li key={i} className="navbar__link source__sans_pro">
                  <Link to={item.path}>{item.name}</Link>
                  {/* <InsideLink links={item.links} /> */}
                </li>
              ))}
            </ul>
          </NavbarMenu>
        </NavbarLeft>
        <NavbarRight className="navbar__right">
          <ul className="navbar__primary">
            <li className="navbar__add">
              <Link to="#">
                <BiPlusMedical color="white" />
              </Link>
            </li>
            <li className="navbar__translate">
              <span>en</span>
            </li>
            <li className="navbar__notifications">
              <Link to="/">
                <IoIosNotifications color="white" />
              </Link>
            </li>
            <li className="navbar__user">
              <Link to="/">user</Link>
            </li>
            <li className="navabr__search">
              <Link to="/">
                <FaSearch color="white" />
              </Link>
            </li>
          </ul>
        </NavbarRight>
      </div>
    </Navbar>
  );
};

export default Header;
