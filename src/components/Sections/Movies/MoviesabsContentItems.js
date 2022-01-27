import React, { useEffect } from "react";
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

const MoviesabsContentItems = ({
  moviesData,
  setMoviesBgImage,
  trailersBlock,
}) => {
  const moviesBgControl = (id, bg_path) => {
    setMoviesBgImage({
      backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${bg_path})`,
    });
  };

  useEffect(() => {}, [setMoviesBgImage]);
  return (
    <MTabsContentCards
      className={`movie__tabs-content-items ${trailersBlock && "wide-tabs"}`}
    >
      {moviesData.map((item, i) => {
        const { id, backdrop_path, title, release_date, vote_average } = item;
        const { first_air_date } = item;
        const voteAverage =
          `${Math.ceil(vote_average * 10)}`.replace(".", "") + "%";
        return (
          <MovieTabCard
            className={`movie__tabs-content-item tab-card ${
              trailersBlock && "wide-card"
            }`}
            style={{ marginTop: "10px", marginBottom: "20px" }}
            key={id}
          >
            <MovieTabCardTop className="tab-card__top">
              <MovieTabCardInside />
              <Link
                to="/"
                onMouseOver={() => moviesBgControl(id, backdrop_path)}
              >
                <img
                  src={
                    "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/" +
                    backdrop_path
                  }
                  alt={title}
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
                <Link to={`/move/${id}`}>{title}</Link>
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
