import React from "react";
import {
  SuggestBlock,
  SuggestIcon,
  SuggestResults,
  SuggestTitle,
} from "./styles";
import { HiTrendingUp } from "react-icons/hi";
import Result from "./Result";

const Suggest = () => {
  return (
    <SuggestBlock className="search-suggest">
      <SuggestTitle className="search-suggest__title padding-top-bootom">
        <SuggestIcon className="search-suggest__icon">
          <HiTrendingUp size={20} />
        </SuggestIcon>
        <h2>Trending</h2>
      </SuggestTitle>
      <SuggestResults className="search-suggest__results">
        <Result path="/" name="Spider-Man: No Way Home" />
        <Result path="/" name="Eternals" />
      </SuggestResults>
    </SuggestBlock>
  );
};

export default Suggest;
