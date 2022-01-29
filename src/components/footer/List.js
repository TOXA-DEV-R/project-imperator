import React from "react";
import { Link } from "react-router-dom";
import { FooterList, FooterListItem } from "./styles";

const List = ({ data }) => {
  return (
    <FooterList>
      {data.map((item) => (
        <FooterListItem key={item.id}>
          <Link to={item.path}>{item.label}</Link>
        </FooterListItem>
      ))}
    </FooterList>
  );
};

export default List;
