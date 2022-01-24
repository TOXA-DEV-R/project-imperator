import React from "react";
import { MTabsContentItems, MTabsContentItem } from "./MoviesStyle";

const MoviesabsContentItems = ({ movies }) => {
  return (
    <MTabsContentItems className="movie__tabs-content-items">
      {movies.map((item, i) => (
        <MTabsContentItem className="movie__tabs-content-item">
          <img src={item} alt="images" />
        </MTabsContentItem>
      ))}
    </MTabsContentItems>
  );
};

export default MoviesabsContentItems;
