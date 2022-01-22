import React from "react";
import {
  SearchingSuggestBlock,
  SearchSuggestIcon,
  SearchSuggestResult,
  SearchSuggestResults,
  SearchSuggestTitle,
} from "./SearchingSuggestStyle";
import { HiTrendingUp } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchingSuggest = () => {
  const SuggestResult = (props) => {
    return (
      <SearchSuggestResult className="search-suggest__result padding-top-bootom">
        <span
          style={{ opacity: 0.7, display: "inline-block", marginRight: "8px" }}
        >
          <FaSearch size={12} />
        </span>
        <Link to={props.path}>{props.name}</Link>
      </SearchSuggestResult>
    );
  };

  return (
    <SearchingSuggestBlock className="search-suggest">
      <SearchSuggestTitle className="search-suggest__title padding-top-bootom">
        <SearchSuggestIcon className="search-suggest__icon">
          <HiTrendingUp size={20} />
        </SearchSuggestIcon>
        <h2>Trending</h2>
      </SearchSuggestTitle>
      <SearchSuggestResults className="search-suggest__results">
        <SuggestResult path="/" name="Spider-Man: No Way Home" />
        <SuggestResult path="/" name="Eternals" />
      </SearchSuggestResults>
    </SearchingSuggestBlock>
  );
};

export default SearchingSuggest;
