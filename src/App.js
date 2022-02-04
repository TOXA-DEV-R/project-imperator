/** @format */

import { Fragment, useEffect, useState } from "react";
import { HeaderProvider } from "./containers/header/context";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import Main from "./containers/main/Main";
import Movie from "./containers/movie/index";
import { GlobalStyle } from "./styles/styles";
import { ContainersProvider } from "./containers/context";
import { useGlobalContext } from "./context/context";
import SearchBar from "./containers/searchBar/index";
import Searching from "./containers/searching/index";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const { searchBarControl } = useGlobalContext();
  useEffect(() => {
    console.log("useEffect.....");
  }, []);
  console.log("app.....");
  return (
    <Fragment>
      <ContainersProvider>
        <GlobalStyle />
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        {searchBarControl && <SearchBar />}
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/searching" exact component={Searching} />
          <Route
            path="/movie/:id"
            render={(props) => <Movie {...props} />}
            exact
          />
        </Switch>
        <Footer />
      </ContainersProvider>
    </Fragment>
  );
};

export default App;
