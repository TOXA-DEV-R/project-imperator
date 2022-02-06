import React, { useState, useRef } from "react";
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
// import Suggest from "../../../components/header/searchBar/Suggest";
import OutsideClickHandler from "react-outside-click-handler";
import { useHeaderContext } from "../../../containers/header/context";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "../../../context/context";

const SearchBar = () => {
  const [searchControl, setSearchControl] = useState({ opacity: 0 });
  const { setSearchBarControl, strongCtrSubmenu } = useHeaderContext();
  const inputValue = useRef(null);
  const history = useHistory();
  const { setSearchingText } = useGlobalContext();

  const submitHandle = (event) => {
    event.preventDefault();
    const inputText = inputValue.current.value;

    if (inputText.length < 1) {
      alert("Enter value, please");
    } else if (inputText.length > 1) {
      setSearchingText(inputText);
      history.push("/searching");
    }
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        strongCtrSubmenu && setSearchBarControl((ct) => !ct);
      }}
    >
      <SearchBarBlock className="search-bar__block">
        <SearchBarContainer className="search-bar__container">
          <SearchBarSection className="search-bar__section">
            <SearchBarForm className="search-bar__form" onSubmit={submitHandle}>
              <SearchBarInput
                type="search"
                name="search"
                placeholder="Search for a movie, tv show,person..."
                className="search-bar__input"
                ref={inputValue}
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
          {/* <Suggest /> */}
        </SearchBarContainer>
      </SearchBarBlock>
    </OutsideClickHandler>
  );
};

export default SearchBar;
