import { useState, useEffect } from "react";
import { Container } from "../../../app/Style";
import http from "../../../services/http";
import { useSectionContext } from "../context";
import MoviesabsContentItems from "./MoviesabsContentItems";
import {
  Movie,
  MovieBasic,
  MovieTab,
  MovieTabs,
  MovieTitle,
} from "./MoviesStyle";

const KEY = "2dd08287b759101888b5a20c23399375";

const Movies = ({
  tabs,
  title,
  initialCategory,
  loading,
  setLoading,
  trailersBlock,
}) => {
  const [movieTabCont, setMovieTabCont] = useState(1);
  const [category, setCategory] = useState(initialCategory);
  const [list, setList] = useState("movie");
  const [page, setPage] = useState(1);
  const [moviesData, setMoviesData] = useState([]);
  const [controlFetch, setControlFetch] = useState(true);
  // const { loading, setLoading } = useSectionContext();
  const [moviesBgImage, setMoviesBgImage] = useState({
    backgroundImage:
      "url(https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg)",
  });
  const [scrollLeft, setScrollLeft] = useState(false);

  const tabControl = (id, listName) => {
    setMovieTabCont(id);
    if (listName === "streaming") {
      setControlFetch(true);
      setCategory("popular");
    }
    if (listName === "for_rent") {
      setControlFetch(true);
      setCategory("top_rated");
    }
    if (listName === "thisWeek") {
      setControlFetch(true);
      setCategory("top_rated");
    }
    if (listName === "in_theatre" || listName === "movies") {
      setControlFetch(true);
      setCategory("upcoming");
    }
    if (listName === "recommendations" || listName === "today") {
      setControlFetch(true);
      setCategory("804435/recommendations");
    }
    if (listName === "on_tv") setControlFetch(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await http.get(
          controlFetch
            ? `/3/${list}/${category}?api_key=${KEY}&language=en-US&page=${page}`
            : `/3/${list}/804435/recommendations?api_key=${KEY}&language=en-US&page=${page}`
        );
        setMoviesData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category, page, loading, list, controlFetch]);

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
          <MoviesabsContentItems
            moviesData={moviesData}
            setMoviesBgImage={setMoviesBgImage}
            trailersBlock={trailersBlock}
            setScrollLeft={setScrollLeft}
          />
        </Container>
      </MovieBasic>
    </Movie>
  );
};

export default Movies;
