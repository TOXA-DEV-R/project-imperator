import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HeaderProvider } from "../components/header/context";
import Header from "../components/header/Header";
import Main from "../containers/main/Main";
import { GlobalStyle } from "./Style";

const App = () => {
  const headerControl = (event) => {
    console.log(event);
  };
  useEffect(() => {
    window.addEventListener("scroll", headerControl);
    return window.addEventListener("scroll", headerControl);
  });

  return (
    <Fragment>
      <GlobalStyle />
      <HeaderProvider>
        <Header />
      </HeaderProvider>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Fragment>
  );
};

export default App;
