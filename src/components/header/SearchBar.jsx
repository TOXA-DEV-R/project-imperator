import React from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBarBlock, SearchBarForm } from "./SearchBarStyle";

const SearchBar = () => {
  return (
    <SearchBarBlock className="search-bar__block">
      <div className="search-bar__container">
        <section className="search-bar__section">
          <SearchBarForm className="search-bar__form">
            <input
              type="search"
              name="search"
              placeholder="Search for a movie, tv show,person..."
              className="search-bar__input"
            />
            <span className="search-bar__icon">
              <FaSearch style={{ opacity: 0.8, marginLeft: "5px" }} size={15} />
            </span>
          </SearchBarForm>
        </section>
      </div>
    </SearchBarBlock>
  );
};

export default SearchBar;
