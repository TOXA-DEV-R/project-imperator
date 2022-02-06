/** @format */

import React from "react";
import { Link } from "react-router-dom";
import {
  AllInfo,
  AllInfosItem,
  AllInfosList,
  AllInfosOverview,
} from "./styles";

const AllInfos = ({ overview, tagline }) => {
  return (
    <AllInfo className="all-infos" style={{ marginTop: "20px" }}>
      <h3 className="all-infos__title">{tagline}</h3>
      <AllInfosOverview className="all-infos__overview">
        <h3>Overview</h3>
        <p>{overview}</p>
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
