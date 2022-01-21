import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { SearchBarBlock, SearchBarForm } from "./SearchBarStyle";
import SearchingSuggest from "./SearchingSuggest";

const SearchBar = () => {
  const [searchControl, setSearchControl] = useState({ opacity: 0 });

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
              <FaSearch style={{ opacity: 0.8 }} size={15} />
            </span>
            <span
              className="search-bar__icon"
              onMouseOver={() => setSearchControl({ opacity: 7 })}
              onMouseOut={() => setSearchControl({ opacity: 0 })}
              style={searchControl}
            >
              <GrFormClose
                style={{ opacity: 0.8, marginLeft: "5px" }}
                size={18}
              />
            </span>
          </SearchBarForm>
        </section>
        <SearchingSuggest />
      </div>
    </SearchBarBlock>
  );
};

export default SearchBar;
