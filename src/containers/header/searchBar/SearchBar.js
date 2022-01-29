import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import {
  SearchBarBlock,
  SearchBarContainer,
  SearchBarForm,
  SearchBarIcon,
  SearchBarInput,
  SearchBarSection,
} from "./styles";
import SearchingSuggest from "../../../components/header/searchBar/SearchingSuggest";
import OutsideClickHandler from "react-outside-click-handler";
import { useHeaderContext } from "../../../containers/header/context";

const SearchBar = () => {
  const [searchControl, setSearchControl] = useState({ opacity: 0 });
  const { setSearchBarControl } = useHeaderContext();
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setSearchBarControl((ct) => !ct);
      }}
    >
      <SearchBarBlock className="search-bar__block">
        <SearchBarContainer className="search-bar__container">
          <SearchBarSection className="search-bar__section">
            <SearchBarForm className="search-bar__form">
              <SearchBarInput
                type="search"
                name="search"
                placeholder="Search for a movie, tv show,person..."
                className="search-bar__input"
              />
              <SearchBarIcon className="search-bar__icon">
                <FaSearch style={{ opacity: 0.8 }} size={15} />
              </SearchBarIcon>
              <SearchBarIcon
                className="search-bar__icon"
                onMouseOver={() => setSearchControl({ opacity: 7 })}
                onMouseOut={() => setSearchControl({ opacity: 0 })}
                style={searchControl}
              >
                <GrFormClose
                  style={{ opacity: 0.8, marginLeft: "5px" }}
                  size={18}
                />
              </SearchBarIcon>
            </SearchBarForm>
          </SearchBarSection>
          <SearchingSuggest />
        </SearchBarContainer>
      </SearchBarBlock>
    </OutsideClickHandler>
  );
};

export default SearchBar;