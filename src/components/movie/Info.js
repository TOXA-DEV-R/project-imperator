/** @format */

import React from "react";
import {
  Info,
  InfosAction,
  InfosActions,
  InfosFacts,
  InfoTitle,
} from "./styles";
import { IoMdArrowDropup } from "react-icons/io";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import data from "./data";

const Infos = ({
  title,
  release_date,
  genres = [],
  voteAverage = 70,
  voteAverageText = "70%",
}) => {
  const progressControlColor = () => {
    if (voteAverage >= 70) {
      return buildStyles({
        pathColor: "#46d174",
        trailColor: "#204e2c",
      });
    } else {
      return buildStyles({
        pathColor: "#d2d531",
        trailColor: "#504a13",
      });
    }
  };
  return (
    <Info className="infos">
      <InfoTitle className="infos__title">
        <h2>
          <Link to="/">{title}</Link>
          <span className="infos__date">({`${release_date}`.slice(0, 4)})</span>
        </h2>
        <InfosFacts className="infos__facts">
          <span className="infos__certification">PG-13</span>
          <span className="infos__release">
            {`${release_date}`.replaceAll("-", "/")} (US)
          </span>
          <ul className="infos__genres">
            {genres.map((item, i) => {
              if (i === 0) {
                return (
                  <li className="infos__genres-item" key={item.id}>
                    <span className="infos__dot"></span>
                    <Link to="/">{item.name},</Link>
                  </li>
                );
              } else {
                return (
                  <li className="infos__genres-item" key={item.id}>
                    <Link to="/">
                      {item.name + `${genres.length - 1 === i ? "" : ","}`}
                    </Link>
                  </li>
                );
              }
            })}
            <li>
              <span className="infos__dot"></span>
              <span className="infos__runtime">2h 28m</span>
            </li>
          </ul>
        </InfosFacts>
        <InfosActions className="infos__actions" style={{ marginTop: "25px" }}>
          {data.infosAction.map((item) => {
            const { icon, info, id, progressbar } = item;
            if (progressbar) {
              return (
                <InfosAction className="infos__action" key={id}>
                  <span className="infos__progressbar">
                    <CircularProgressbar
                      strokeWidth={6}
                      value={voteAverage}
                      text={voteAverageText}
                      styles={progressControlColor()}
                    />
                  </span>
                  <span className="infos__score">
                    User <br /> Score
                  </span>
                </InfosAction>
              );
            }
            return (
              <InfosAction className="infos__action" key={id}>
                <span className="submenu__dropup">
                  <IoMdArrowDropup color="#032540" size={28} />
                </span>
                <span className="infos__action-icon">{icon}</span>
                <ul className="infos__show">
                  <li>{info}</li>
                </ul>
              </InfosAction>
            );
          })}
        </InfosActions>
      </InfoTitle>
    </Info>
  );
};

export default Infos;
