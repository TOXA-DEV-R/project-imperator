/** @format */

import { useState, useEffect, memo } from "react";
import { Container } from "../../../styles/styles";
import http from "../../../services/http";
import TabsContentItems from "../../../components/sections/movies/TabsContentItems";
import { Movie, MovieBasic, MovieTab, MovieTabs, MovieTitle } from "./styles";
import tabsReducer from "./reducer";

const KEY = "2dd08287b759101888b5a20c23399375";

const Movies = memo(({ tabs, title, initialCategory, trailersBlock }) => {
  const [movieTabCont, setMovieTabCont] = useState(1);
  const [category, setCategory] = useState(initialCategory);
  const [moviesData, setMoviesData] = useState([]);
  const [controlFetch, setControlFetch] = useState(true);
  const [loading, setLoading] = useState(true);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [moviesBgImage, setMoviesBgImage] = useState({
    backgroundImage:
      "url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg)",
  });

  const tabControl = (id, listName) => {
    setMovieTabCont(id);
    const { ctrol, category } = tabsReducer({ type: listName });
    setControlFetch(ctrol);
    setCategory(category);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await http.get(
          controlFetch
            ? `/3/movie/${category}?api_key=${KEY}&language=en-US&page=1`
            : `/3/movie/804435/recommendations?api_key=${KEY}&language=en-US&page=1`
        );
        setMoviesData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category, loading, controlFetch]);

  if (loading) {
    return <div className="loading loading--full-height"></div>;
  } else {
    return (
      <Movie
        className={scrollLeft ? "movie movie__scroll" : "movie"}
        style={trailersBlock && moviesBgImage}
      >
        <MovieBasic className="movie__basic" trailersBlock={trailersBlock}>
          <Container
            className="movie__container"
            style={trailersBlock && { paddingTop: "30px" }}
          >
            <MovieTitle className="movie__title" trailersBlock={trailersBlock}>
              <h2>{title}</h2>
            </MovieTitle>
            <MovieTabs
              className={`movie__tabs ${trailersBlock && "movie__tabs-wide"}`}
            >
              {tabs.map((tab) => (
                <MovieTab
                  key={tab.id}
                  className={`movie__tab ${
                    movieTabCont === tab.id ? "active" : ""
                  }`}
                  trailersBlock={trailersBlock}
                >
                  <button
                    type="button"
                    onClick={() => tabControl(tab.id, tab.listName)}
                  >
                    {tab.name}
                  </button>
                </MovieTab>
              ))}
            </MovieTabs>
          </Container>
          <Container initalWith={true} fluid={true}>
            <TabsContentItems
              moviesData={moviesData}
              setMoviesBgImage={setMoviesBgImage}
              trailersBlock={trailersBlock}
              setScrollLeft={setScrollLeft}
            />
          </Container>
        </MovieBasic>
      </Movie>
    );
  }
});

export default Movies;
