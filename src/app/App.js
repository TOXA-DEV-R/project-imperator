import { Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HeaderProvider } from "../components/header/context";
import Header from "../components/header/Header";
import GlobalStyle from "./Style";
const App = () => {
  return (
    <Fragment>
      <Router>
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <GlobalStyle />
      </Router>
    </Fragment>
  );
};

export default App;
