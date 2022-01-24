import React, { useState } from "react";
import { Container } from "../../../app/Style";
import {
  Movie,
  MovieTab,
  MovieTabs,
  MTabsContentItems,
  MTabsContentItem,
  MovieTitle,
} from "./MoviesStyle";
import Streaming from "../../../assets/images/Streaming.jpg";
import OnTV from "../../../assets/images/On TV.jpg";
import ForRent from "../../../assets/images/For Rent.jpg";
import InTheaters from "../../../assets/images/In Theaters.jpg";

const Movies = ({ tabs, title }) => {
  const [movieTabCont, setMovieTabCont] = useState(1);
  const movies = [Streaming, OnTV, ForRent, InTheaters];

  const tabsControl = (id) => {
    if (id === 0) setMovieTabCont(1);
    else if (id > tabs.length) setMovieTabCont(tabs.length);
    setMovieTabCont(id);
  };

  return (
    <Movie className="movie">
      <Container className="movie__container">
        <MovieTitle className="movie__title">
          <h2>{title}</h2>
        </MovieTitle>
        <MovieTabs className="movie__tabs">
          {tabs.map((tab) => (
            <MovieTab
              key={tab.id}
              className={`movie__tab ${
                movieTabCont === tab.id ? "active" : ""
              }`}
            >
              <button type="button" onClick={() => tabsControl(tab.id)}>
                {tab.name}
              </button>
            </MovieTab>
          ))}
        </MovieTabs>
      </Container>
      <Container initalWith={true} fluid={true}>
        {/* {movies.map()} */}
      </Container>
    </Movie>
  );
};

export default Movies;
