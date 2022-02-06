import React from "react";
import { Link } from "react-router-dom";
import { List, Results } from "./styles";
import data from "./data";

const Left = () => {
  const LeftList = ({ data }) => {
    return (
      <List className="searching__list">
        {data.map((item) => (
          <li className="searching__item">
            <Link to={item.path}>{item.name}</Link>
            <span>{item.result}</span>
          </li>
        ))}
      </List>
    );
  };
  return (
    <Results className="results">
      <h3 className="results__title">Search Results</h3>
      <LeftList data={data} />
    </Results>
  );
};

export default Left;
