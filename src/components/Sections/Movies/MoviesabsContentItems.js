import React from "react";
import { useSectionContext } from "../context";
import { MTabsContentItems, MTabsContentItem } from "./MoviesStyle";

const MoviesabsContentItems = () => {
  const { moviesData } = useSectionContext();
  console.log(moviesData);
  return (
    <MTabsContentItems className="movie__tabs-content-items">
      {moviesData.map((item, i) => (
        <MTabsContentItem className="movie__tabs-content-item">
          <h2>{item.original_title}</h2>
          <p>{item.release_date}</p>
        </MTabsContentItem>
      ))}
    </MTabsContentItems>
  );
};

export default MoviesabsContentItems;
