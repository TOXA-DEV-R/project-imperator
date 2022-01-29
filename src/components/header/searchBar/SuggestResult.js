import { SearchSuggestResult } from "./styles";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

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

export default SuggestResult;
