/** @format */

import React, { useState, useEffect } from "react";
import Leaderboard from "../sections/leaderboard/Leaderboard";
import Movies from "../sections/movies/Movies";
import Searching from "../../components/sections/searching/Searching";
import tabs from "./data";
import { PrimaryMain } from "./styles";
import { useGlobalContext } from "../../context/context";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const { setStrongCtrSubmenu } = useGlobalContext();

  // console.log("Main");
  useEffect(() => {
    setStrongCtrSubmenu(false);
  }, [loading]);

  if (loading) {
    return <div className="loading loading--full-height"></div>;
  } else {
    return (
      <PrimaryMain>
        <Searching />
        <Movies
          title={"What's Popular"}
          tabs={tabs.popular}
          initialCategory="popular"
          loading={loading}
          setLoading={setLoading}
        />
        <Movies
          title={"Free To Watch"}
          tabs={tabs.free}
          initialCategory="upcoming"
          loading={loading}
          setLoading={setLoading}
        />
        <Movies
          title={"Latest Trailers"}
          tabs={tabs.trailers}
          initialCategory="now_playing"
          loading={loading}
          setLoading={setLoading}
          trailersBlock={true}
        />
        <Movies
          title={"Trending"}
          tabs={tabs.trending}
          initialCategory="804435/recommendations"
          loading={loading}
          setLoading={setLoading}
        />
        <Leaderboard />
      </PrimaryMain>
    );
  }
};

export default Main;
