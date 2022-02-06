/** @format */

import React from "react";
import reactDom from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/context";

reactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
