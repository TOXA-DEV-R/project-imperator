import React, { useEffect } from "react";
import {
  SubmenuContainer,
  SubmenuColumnAdd,
  SubmenuColumnTooltip,
  SubmenuUser,
} from "./SubmenuStyle";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import { useHeaderContext } from "./context";

const Submenu = () => {
  const { navbarSubmenuControl, submenuStyle } = useHeaderContext();

  const UserGroup = (props) => {
    return (
      <p>
        <Link to={props.path}>{props.name}</Link>
      </p>
    );
  };

  useEffect(() => {}, [navbarSubmenuControl]);
  return (
    <SubmenuContainer className="submenu" style={submenuStyle}>
      {navbarSubmenuControl[0].control && (
        <SubmenuColumnAdd className="submenu-add__column">
          <span className="submenu__dropup">
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
      {navbarSubmenuControl[1].control && (
        <SubmenuColumnTooltip className="submenu-tooltip">
          <span className="submenu__dropup">
            <IoMdArrowDropup color="white" size={28} />
          </span>
          <li className="submenu-tooltip__title">
            <h2>
              Unread Notifications <span>0</span>
            </h2>
          </li>
          <li className="submenu-tooltip__text">
            <p>
              Good job! Looks like you're all caught up.
              <Link to="/">View All</Link>
            </p>
          </li>
        </SubmenuColumnTooltip>
      )}
      {navbarSubmenuControl[2].control && (
        <SubmenuUser className="user">
          <span className="submenu__dropup">
            <IoMdArrowDropup color="white" size={28} />
          </span>
          <div className="user__profile">
            <h2>
              <Link to="/">Jone</Link>
            </h2>
            <Link to="/">View profile</Link>
          </div>
          <div className="user__gruop">
            <UserGroup path="/" name="Discussions" />
            <UserGroup path="/" name="Lists" />
            <UserGroup path="/" name="Ratings" />
            <UserGroup path="/" name="Watchlist" />
          </div>
          <div className="user__gruop">
            <UserGroup path="/" name="Edit Profile" />
            <UserGroup path="/" name="Settings" />
          </div>
          <div className="user__gruop">
            <UserGroup path="/" name="Logout" />
          </div>
        </SubmenuUser>
      )}
    </SubmenuContainer>
  );
};

export default Submenu;
