import React from "react";
import { useSectionContext } from "../context";
import {
  MTabsContentCards,
  MovieTabCard,
  MovieTabCardTop,
  MovieTabCardBottom,
} from "./MoviesStyle";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import MovieTabCardInside from "./MovieTabCardInside";

const MoviesabsContentItems = () => {
  const { moviesData } = useSectionContext();

  return (
    <MTabsContentCards className="movie__tabs-content-items">
      {moviesData.map((item) => {
        const { id, backdrop_path, original_title, release_date } = item;
        const { first_air_date, name } = item;
        const voteAverage = `${item.vote_average}`.replace(".", "") + "%";
        return (
          <MovieTabCard className="movie__tabs-content-item tab-card" key={id}>
            <MovieTabCardTop className="tab-card__top">
              <MovieTabCardInside />
              <Link to="/">
                <img
                  src={
                    "https://www.themoviedb.org/t/p/w220_and_h330_face/" +
                    backdrop_path
                  }
                  alt={original_title}
                />
              </Link>
              <div className="progressbar">
                <CircularProgressbar
                  strokeWidth={6}
                  value={voteAverage}
                  text={voteAverage}
                />
              </div>
            </MovieTabCardTop>
            <MovieTabCardBottom className="tab-card__bottom">
              <h2>
                <Link to={`/move/${id}`}>
                  {(original_title && original_title) || (name && name)}
                </Link>{" "}
              </h2>
              <p>
                {(release_date && release_date) ||
                  (first_air_date && first_air_date)}
              </p>
            </MovieTabCardBottom>
          </MovieTabCard>
        );
      })}
    </MTabsContentCards>
  );
};

export default MoviesabsContentItems;
