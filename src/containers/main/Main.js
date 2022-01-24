import React, { useEffect, useState } from "react";
import { useSectionContext } from "../../components/Sections/context";
import Movies from "../../components/Sections/Movies/Movies";
import Searching from "../../components/Sections/searching/Searching";
import { PrimaryMain } from "./MainStyle";

const Main = () => {
  const tabs = [
    { name: "Streaming", id: 1 },
    { name: "On TV", id: 2 },
    { name: "For Rent", id: 3 },
    { name: "In Theaters", id: 4 },
  ];
  const { data, fetchMovie } = useSectionContext();

  return (
    <PrimaryMain>
      <Searching />
      <Movies title={"What's Popular"} tabs={tabs} />
    </PrimaryMain>
  );
};

export default Main;
