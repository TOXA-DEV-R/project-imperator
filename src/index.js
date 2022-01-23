import React from "react";
import reactDom from "react-dom";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";
reactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
