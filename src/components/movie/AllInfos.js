import React from "react";
import { Link } from "react-router-dom";
import {
  AllInfo,
  AllInfosItem,
  AllInfosList,
  AllInfosOverview,
} from "./styles";

const AllInfos = () => {
  return (
    <AllInfo className="all-infos">
      <AllInfosOverview className="all-infos__overview">
        <h3>Overview</h3>
        <p>
          Peter Parker is unmasked and no longer able to separate his normal
          life from the high-stakes of being a super-hero. When he asks for help
          from Doctor Strange the stakes become even more dangerous, forcing him
          to discover what it truly means to be Spider-Man.
        </p>
      </AllInfosOverview>
      <AllInfosList className="all-infos__list">
        <AllInfosItem>
          <Link to="/">Steve Ditko</Link>
          <span>Characters</span>
        </AllInfosItem>
        <AllInfosItem>
          <Link to="/">Stan Lee</Link>
          <span>Characters</span>
        </AllInfosItem>
        <AllInfosItem>
          <Link to="/">Jon Watts</Link>
          <span>Director</span>
        </AllInfosItem>
        <AllInfosItem>
          <Link to="/">Erik Sommers</Link>
          <span>Writer</span>
        </AllInfosItem>
        <AllInfosItem>
          <Link to="/">Chris McKenna</Link>
          <span>Writer</span>
        </AllInfosItem>
      </AllInfosList>
    </AllInfo>
  );
};

export default AllInfos;
