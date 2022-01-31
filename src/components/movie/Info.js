import React from "react";
import {
  Info,
  InfosAction,
  InfosActions,
  InfosFacts,
  InfoTitle,
} from "./styles";
import { FaListUl } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { BsDot, BsFillBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";

const Infos = ({ voteAverage = 70, voteAverageText = "70%" }) => {
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
          <Link to="/">Spider-Man: No Way Home</Link>
          <span className="infos__date">(2021)</span>
        </h2>
        <InfosFacts className="infos__facts">
          <span className="infos__certification">PG-13</span>
          <span className="infos__release">12/17/2021 (US)</span>
          <ul className="infos__genres">
            <li className="infos__genres-item">
              <span className="infos__dot"></span>
              <Link to="/">Action,</Link>
            </li>
            <li className="infos__genres-item">
              <Link to="/">Adventure,</Link>
            </li>
            <li className="infos__genres-item">
              <Link to="/">Science Fiction</Link>
            </li>
            <li>
              <span className="infos__dot"></span>
              <span className="infos__runtime">2h 28m</span>
            </li>
          </ul>
        </InfosFacts>
        <InfosActions className="infos__actions">
          <InfosAction className="infos__action">
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
          <InfosAction className="infos__action">
            <span>
              <FaListUl color="white" size={16} />
            </span>
            <ul className="infos__show">
              <li>Add to list</li>
            </ul>
          </InfosAction>
          <InfosAction className="infos__action">
            <span>
              <MdFavorite color="white" size={16} />
            </span>
            <ul className="infos__show">
              <li>Mark as favorite</li>
            </ul>
          </InfosAction>
          <InfosAction className="infos__action">
            <span>
              <BsFillBookmarkFill color="white" size={16} />
            </span>
            <ul className="infos__show">
              <li>Add to your watchlist</li>
            </ul>
          </InfosAction>
          <InfosAction className="infos__action">
            <span>
              <AiFillStar color="white" size={16} />
            </span>
            <ul className="infos__show">
              <li>Rate It!</li>
            </ul>
          </InfosAction>
        </InfosActions>
      </InfoTitle>
    </Info>
  );
};

export default Infos;
