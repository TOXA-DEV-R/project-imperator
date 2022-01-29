import React, { useEffect } from "react";
import {
  SubmenuContainer,
  SubmenuAddList,
  SubmenuNotificationList,
  SubmenuUser,
  Dropup,
  SubmenuAddItem,
  SubmenuNotificationItem,
  SubmenuUserProfile,
  SubmenuUserGruop,
} from "./styles";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";
import { useHeaderContext } from "../../../containers/header/context";

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
        <SubmenuAddList className="submenu-add__list">
          <Dropup className="submenu__dropup">
            <IoMdArrowDropup color="white" size={28} />
          </Dropup>
          <SubmenuAddItem className="submenu-add__item">
            <Link to="/"> Add New Movie </Link>
          </SubmenuAddItem>
          <SubmenuAddItem className="submenu-add__item">
            <Link to="/"> Add New TV Show </Link>
          </SubmenuAddItem>
        </SubmenuAddList>
      )}
      {navbarSubmenuControl[1].control && (
        <SubmenuNotificationList className="submenu-notification__list">
          <Dropup className="submenu__dropup">
            <IoMdArrowDropup color="white" size={28} />
          </Dropup>
          <SubmenuNotificationItem className="submenu-notification__item">
            <h2 className="submenu-notification__title">
              Unread Notifications <span>0</span>
            </h2>
          </SubmenuNotificationItem>
          <SubmenuNotificationItem className="submenu-notification__item">
            <p className="submenu-notification__text">
              Good job! Looks like you're all caught up.
              <Link to="/">View All</Link>
            </p>
          </SubmenuNotificationItem>
        </SubmenuNotificationList>
      )}
      {navbarSubmenuControl[2].control && (
        <SubmenuUser className="submenu__user">
          <Dropup className="submenu__dropup">
            <IoMdArrowDropup color="white" size={28} />
          </Dropup>
          <SubmenuUserProfile className="submenu__user-profile">
            <h2>
              <Link to="/">Jone</Link>
            </h2>
            <Link to="/">View profile</Link>
          </SubmenuUserProfile>
          <SubmenuUserGruop className="submenu__user-gruop">
            <UserGroup path="/" name="Discussions" />
            <UserGroup path="/" name="Lists" />
            <UserGroup path="/" name="Ratings" />
            <UserGroup path="/" name="Watchlist" />
          </SubmenuUserGruop>
          <SubmenuUserGruop className="submenu__user-gruop">
            <UserGroup path="/" name="Edit Profile" />
            <UserGroup path="/" name="Settings" />
          </SubmenuUserGruop>
          <SubmenuUserGruop className="submenu__user-gruop">
            <UserGroup path="/" name="Logout" />
          </SubmenuUserGruop>
        </SubmenuUser>
      )}
    </SubmenuContainer>
  );
};

export default Submenu;
