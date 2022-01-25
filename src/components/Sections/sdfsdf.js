import { useState } from "react";
import http from "../../services/http";

const fetchMovies = (category = "popular", page = 1) => {
  const KEY = "2dd08287b759101888b5a20c23399375";
  const [data, setData] = useState({ data: null, loading: false });

  const fetchData = async () => {
    try {
      const response = await http.get(
        `${category}?api_key=${KEY}&language=en-US&page=${page}`
      );
      const results = await response.data.results;
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
  return data;
};

export default fetchMovies;
