import React, { useState, useEffect } from "react";
import { useSectionContext } from "../../components/Sections/context";
import Movies from "../../components/Sections/Movies/Movies";
import Searching from "../../components/Sections/searching/Searching";
import tabs from "./mainData";
import { PrimaryMain } from "./MainStyle";

const Main = () => {
  const [loading, setLoading] = useState(false);
  console.log("Main");
  useEffect(() => {}, [loading]);

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
          initialCategory="804435/recommendations"
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
      </PrimaryMain>
    );
  }
};

export default Main;
