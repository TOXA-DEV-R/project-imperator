/** @format */

import React, { useEffect, useRef } from "react";
import {
  MTabsContentCards,
  MovieTabCard,
  MovieTabCardTop,
  MovieTabCardBottom,
  TabCardPlay,
} from "./styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import TabCardInside from "./TabCardInside";
import { BsFillPlayFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const TabsContentItems = ({
  moviesData,
  setMoviesBgImage,
  trailersBlock,
  setScrollLeft,
}) => {
  const history = useHistory();
  const moviesBgControl = (id, bg_path) => {
    setMoviesBgImage({
      backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces${bg_path})`,
    });
  };

  const scrollLeftCard = useRef(null);

  const scrollHandle = (e) => {
    if (e.target.scrollLeft > 70) {
      setScrollLeft(true);
    } else {
      setScrollLeft(false);
    }
  };
  useEffect(() => {
    if (scrollLeftCard) {
      scrollLeftCard.current.addEventListener("scroll", scrollHandle);
      // contentCards.current.target.addEventListener("scroll", scrollHandle);
      // window.addEventListener
    }
  }, []);

  return (
    <MTabsContentCards
      className={`movie__tabs-content-items ${trailersBlock && "wide-tabs"}`}
      ref={scrollLeftCard}
    >
      {moviesData.map((item, i) => {
        const { id, poster_path, title, release_date, vote_average } = item;
        const { first_air_date } = item;
        const voteAverage = Math.ceil(vote_average * 10);
        const voteAverageText =
          `${Math.ceil(vote_average * 10)}`.replace(".", "") + "%";

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
          <MovieTabCard
            className={`${
              trailersBlock
                ? "movie__tabs-cotent-item tab-card wide-card"
                : "movie__tabs-cotent-item tab-card"
            }`}
            key={id}
          >
            <MovieTabCardTop className="tab-card__top">
              <TabCardInside />
              {trailersBlock && (
                <TabCardPlay
                  className="tab-card__play"
                  onMouseOver={() => moviesBgControl(id, poster_path)}
                  onClick={() => {
                    history.push(`/movie/:${id}`);
                  }}
                >
                  <button type="button">
                    <BsFillPlayFill size={70} color="white" />
                  </button>
                </TabCardPlay>
              )}
              <Link to={{ pathname: `movie/:${id}`, state: { id } }}>
                <LazyLoadImage
                  src={
                    (trailersBlock
                      ? "https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/"
                      : "https://www.themoviedb.org/t/p/w220_and_h330_face/") +
                    poster_path
                  }
                  alt={title}
                  effect="blur"
                  delayTime={30}
                />
              </Link>
              {trailersBlock ? null : (
                <div className="progressbar">
                  <CircularProgressbar
                    strokeWidth={6}
                    value={voteAverage}
                    text={voteAverageText}
                    styles={progressControlColor()}
                  />
                </div>
              )}
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

export default TabsContentItems;
