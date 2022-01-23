import React from "react";
import Movies from "../../components/Sections/Movies/Movies";
import Searching from "../../components/Sections/searching/Searching";
import { PrimaryMain } from "./MainStyle";

const Main = () => {
  return (
    <PrimaryMain>
      <Searching />
      <Movies />
    </PrimaryMain>
  );
};

export default Main;
