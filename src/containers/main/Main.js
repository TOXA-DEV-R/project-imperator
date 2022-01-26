import React, { useState } from "react";
import { useSectionContext } from "../../components/Sections/context";
import Movies from "../../components/Sections/Movies/Movies";
import Searching from "../../components/Sections/searching/Searching";
import tabs from "./mainData";
import { PrimaryMain } from "./MainStyle";

const Main = () => {
  const popularTab = tabs.popular;
  const [movieTabCont, setMovieTabCont] = useState(1);
  const { Loading } = useSectionContext();

  const tabsControl = (id) => {
    if (id === 0) setMovieTabCont(1);
    else if (id > popularTab.length) setMovieTabCont(popularTab.length);
    setMovieTabCont(id);
  };

  if (Loading) return <h1>Loading...</h1>;

  return (
    <PrimaryMain>
      <Searching />
      <Movies
        title={"What's Popular"}
        tabs={popularTab}
        movieTabCont={movieTabCont}
        tabsControl={tabsControl}
      />
    </PrimaryMain>
  );
};

export default Main;
