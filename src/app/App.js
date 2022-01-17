import { Fragment, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../components/header/Header";
import GlobalStyle from "./Style";
const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <GlobalStyle />
      </Router>
    </Fragment>
  );
};

export default App;
