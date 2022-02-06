import { Fragment, useEffect } from "react";
import { HeaderProvider } from "./containers/header/context";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import Main from "./containers/main/Main";
import { GlobalStyle } from "./styles/styles";
import Searching from "./containers/searching/index";
import { ContainersProvider } from "./containers/context";
import { Switch, Route } from "react-router-dom";

const App = () => {
  // const headerControl = (event) => {
  //   // console.log(event);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", headerControl);
  //   return window.addEventListener("scroll", headerControl);
  // }, []);

  return (
    <Fragment>
      <ContainersProvider>
        <GlobalStyle />
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/searching" exact component={Searching} />
        </Switch>
        <Footer />
      </ContainersProvider>
    </Fragment>
  );
};

export default App;
