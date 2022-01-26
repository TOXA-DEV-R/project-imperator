import React, { useState } from "react";
import { FaList } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {
  MovieTabCardAddList,
  MovieTabCardAdditem,
  TabCardAddBtn,
} from "./MoviesStyle";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const MovieTabCardInside = () => {
  const [control, setControl] = useState(false);

  const cardList = [
    {
      title: "Add to list",
      icon: <FaList size={13} color="black" />,
      path: "/",
    },
    {
      title: "Favorite",
      icon: <MdFavorite size={13} color="black" />,
      path: "/",
    },
    {
      title: "Watchlist",
      icon: <BsFillBookmarkFill size={13} color="black" />,
      path: "/",
    },
    {
      title: "Your rating",
      icon: <AiFillStar size={13} color="black" />,
      path: "/",
    },
  ];

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

export default MovieTabCardInside;
