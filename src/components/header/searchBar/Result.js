import { SuggestResult } from "./styles";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Result = (props) => {
  return (
    <SuggestResult className="search-suggest__result padding-top-bootom">
      <span
        style={{ opacity: 0.7, display: "inline-block", marginRight: "8px" }}
      >
        <FaSearch size={12} />
      </span>
      <Link to={props.path}>{props.name}</Link>
    </SuggestResult>
  );
};

export default Result;
