import { useState } from "react";
import { NavbarRight } from "./HeaderStyle";
import { BiPlusMedical } from "react-icons/bi";
import { IoIosNotifications, IoMdArrowDropup } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderRight = () => {
  const [navbaraAdd, setNavbaraAdd] = useState(false);
  const [navbarNotifications, setNavbarNotifications] = useState(true);
  const [navbarUser, setNavbarUser] = useState(true);

  return (
    <NavbarRight className="navbar__right">
      <ul className="navbar__primary">
        <li className="navbar__add">
          <button type="button" onClick={() => setNavbaraAdd(!navbaraAdd)}>
            <BiPlusMedical color="white" size="20px" />
          </button>
          {navbaraAdd && (
            <ul className="navbar__inside-add">
              <span className="navbar__dropup">
                <IoMdArrowDropup color="white" size={28} />
              </span>
              <li>
                <Link to="/"> Add New Movie </Link>
              </li>
              <li>
                <Link to="/"> Add New TV Show </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar__translate">
          <span>en</span>
        </li>
        <li className="navbar__notifications">
          <button
            type="button"
            onClick={() => setNavbarNotifications(!navbarNotifications)}
          >
            <IoIosNotifications color="white" size={23} />
            <span className="navbar__notifications-counter">1</span>
          </button>
          {navbarNotifications && (
            <ul className="tooltip">
              <span className="navbar__dropup">
                <IoMdArrowDropup color="white" size={28} />
              </span>
              <li className="tooltip__title">
                <h2>
                  Unread Notifications <span>0</span>
                </h2>
              </li>
              <li className="tooltip__text">
                <p>
                  Good job! Looks like you're all caught up.
                  <Link to="/">View All</Link>
                </p>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar__user">
          <button type="button" onClick={() => setNavbarUser(!navbarUser)}>
            <span>t</span>
          </button>
          {navbarUser && (
            <ul>
              <li>user</li>
            </ul>
          )}
        </li>
        <li className="navabr__search">
          <Link to="/">
            <FaSearch color="white" size={21} />
          </Link>
        </li>
      </ul>
    </NavbarRight>
  );
};

export default HeaderRight;
