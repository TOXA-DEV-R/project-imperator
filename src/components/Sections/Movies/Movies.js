import React, { useState } from "react";
import { Container } from "../../../app/Style";
import { useSectionContext } from "../context";
import MoviesabsContentItems from "./MoviesabsContentItems";
import {
  Movie,
  MovieTab,
  MovieTabs,
  MovieTitle,
  MTabsContentItems,
} from "./MoviesStyle";

const Movies = ({ tabs, title, tabsControl, movieTabCont }) => {
  const { setCategory, setPage } = useSectionContext();
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
        <MoviesabsContentItems />
      </Container>
    </Movie>
  );
};

export default Movies;
