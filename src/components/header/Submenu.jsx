import React, { useEffect, useRef } from "react";
import { SubmenuContainer, SubmenuColumnAdd } from "./SubmenuStyle";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

const Submenu = ({ navbaraAdd, navbarNotifications, navbarUser }) => {
  return (
    <SubmenuContainer className="submenu">
      {navbaraAdd && (
        <SubmenuColumnAdd className="submenu-add__column">
          <span className="submenu-add__column-dropup">
            <IoMdArrowDropup color="white" size={28} />
          </span>
          <li>
            <Link to="/"> Add New Movie </Link>
          </li>
          <li>
            <Link to="/"> Add New TV Show </Link>
          </li>
        </SubmenuColumnAdd>
      )}
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
      {navbarUser && (
        <ul>
          <li>user</li>
        </ul>
      )}
    </SubmenuContainer>
  );
};

export default Submenu;
