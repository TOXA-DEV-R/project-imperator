import React from "react";
import {
  SearchingSuggestBlock,
  SearchSuggestIcon,
  SearchSuggestResults,
  SearchSuggestTitle,
} from "./styles";
import { HiTrendingUp } from "react-icons/hi";
import SuggestResult from "./SuggestResult";

const SearchingSuggest = () => {
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
