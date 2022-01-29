import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HeaderProvider } from "./containers/header/context";
import Header from "./containers/header/Header";
import Footer from "./containers/footer/Footer";
import Main from "./containers/main/Main";
import { GlobalStyle } from "./styles/styles";

const App = () => {
  // const headerControl = (event) => {
  //   // console.log(event);
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", headerControl);
  //   return window.addEventListener("scroll", headerControl);
  // }, []);
  console.log("app");
  return (
    <Fragment>
      <GlobalStyle />
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
