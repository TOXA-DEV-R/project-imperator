import { createContext, useContext, useEffect, useState } from "react";
import http from "../../services/http";

const sectionContext = createContext();

const SectionsProvider = ({ children }) => {
  const KEY = "2dd08287b759101888b5a20c23399375";
  const [category, setCategory] = useState("popular");
  const [list, setList] = useState("movie");
  const [page, setPage] = useState(1);
  const [Loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await http.get(
          `/3/${list}/${category}?api_key=${KEY}&language=en-US&page=${page}`
        );
        setMoviesData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [category, page, Loading, list]);

  return (
    <sectionContext.Provider
      value={{ setCategory, setPage, Loading, moviesData, setList }}
    >
      {children}
    </sectionContext.Provider>
  );
};

const useSectionContext = () => {
  return useContext(sectionContext);
};
export { SectionsProvider, useSectionContext };
