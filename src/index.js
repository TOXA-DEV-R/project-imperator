import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/context";

reactDom.render(
  <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
