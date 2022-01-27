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
  const [moviesBgImage, setMoviesBgImage] = useState({});

  console.log("response");

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
    if (listName === "in_theatre") {
      setControlFetch(true);
      setCategory("upcoming");
    }
    if (listName === "recommendations") {
      setControlFetch(true);
      setCategory("804435/recommendations");
    }
    if (listName === "on_tv") setControlFetch(false);
    console.log(listName);
  };

  return (
    <Movie className="movie" style={trailersBlock && moviesBgImage}>
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
          />
        </Container>
      </MovieBasic>
    </Movie>
  );
};

export default Movies;
