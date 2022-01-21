import React from "react";
import {
  SearchingSuggestBlock,
  SearchSuggestResults,
} from "./SearchingSuggestStyle";
import { HiTrendingUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchingSuggest = () => {
  const SuggestResult = (props) => {
    return (
      <li className="search-suggest__result padding-top-bootom">
        <span
          style={{ opacity: 0.7, display: "inline-block", marginRight: "8px" }}
        >
          <FaSearch size={12} />
        </span>
        <Link to={props.path}>{props.name}</Link>
      </li>
    );
  };

  return (
    <SearchingSuggestBlock className="search-suggest">
      <div className="search-suggest__title padding-top-bootom">
        <span className="search-suggest__icon">
          <HiTrendingUp size={20} />
        </span>
        <h2>Trending</h2>
      </div>
      <SearchSuggestResults className="search-suggest__results">
        <SuggestResult path="/" name="Spider-Man: No Way Home" />
        <SuggestResult path="/" name="Eternals" />
      </SearchSuggestResults>
    </SearchingSuggestBlock>
  );
};

export default SearchingSuggest;
