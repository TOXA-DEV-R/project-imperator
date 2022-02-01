/** @format */

import React, { useState } from "react";
import {
  MovieTabCardAddList,
  MovieTabCardAdditem,
  TabCardAddBtn,
} from "./styles";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import cardList from "./data";

const TabCardInside = () => {
  const [control, setControl] = useState(false);

  const TabCardAdditem = ({ title, icon, path }) => {
    return (
      <MovieTabCardAdditem>
        <Link to={path}>
          <span>{icon}</span>
          {title}
        </Link>
      </MovieTabCardAdditem>
    );
  };

  if (control) {
    return (
      <OutsideClickHandler
        onOutsideClick={() => {
          setControl(!control);
        }}
      >
        <MovieTabCardAddList className="tab-card__add-list">
          {cardList.map((item) => (
            <TabCardAdditem
              title={item.title}
              icon={item.icon}
              path={item.path}
            />
          ))}
        </MovieTabCardAddList>
      </OutsideClickHandler>
    );
  } else {
    return (
      <TabCardAddBtn
        type="button"
        className="tab-card__add-btn"
        onClick={() => setControl(!control)}
      >
        <IoEllipsisHorizontalCircleSharp size={23} />
      </TabCardAddBtn>
    );
  }
};

export default TabCardInside;
