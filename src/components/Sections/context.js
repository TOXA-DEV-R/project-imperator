import { createContext, useContext, useEffect, useState } from "react";
import http from "../../services/http";

const sectionContext = createContext();

const SectionsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [useEffectControl, setUseEffectControl] = useState(false);

  const fetchMovie = async () => {
    try {
      const response = await http.get(
        "popular?api_key=2dd08287b759101888b5a20c23399375&language=en-US&page=1"
      );
      const results = await response.data;
      setData(results.results);
      setUseEffectControl(true);
      return results;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <sectionContext.Provider value={{ data, fetchMovie }}>
      {children}
    </sectionContext.Provider>
  );
};

const useSectionContext = () => {
  return useContext(sectionContext);
};
export { SectionsProvider, useSectionContext };
