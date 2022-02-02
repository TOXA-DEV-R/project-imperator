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
import Sticky from "react-stickynode";

const App = () => {
  const { searchBarControl } = useGlobalContext();
  const [headerClass, setHeaderClass] = useState();

  const handleStateChange = (status) => {
    console.log(status.status, Sticky.STATUS_FIXED);
    if (status.status === Sticky.STATUS_FIXED) {
      setHeaderClass(true);
    }
    if (status.status === Sticky.STATUS_ORIGINAL) {
      setHeaderClass(false);
    }
  };
  return (
    <Fragment>
      <ContainersProvider>
        <GlobalStyle />
        <HeaderProvider>
          <Sticky innerZ={1000} onStateChange={handleStateChange}>
            <Header headerClass={headerClass} />
          </Sticky>
        </HeaderProvider>
        {searchBarControl && (
          <Sticky innerZ={1000}>
            <SearchBar />
          </Sticky>
        )}
        <Switch>
          <Route path="/" render={(props) => <Main {...props} />} exact />
          <Route
            path="/searching"
            render={(props) => <Searching {...props} />}
            exact
          />
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
