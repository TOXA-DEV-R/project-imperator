import React from "react";
import { Link } from "react-router-dom";
import { Item, List, MenuBlock } from "./styles";
import { IoMdArrowDropdown } from "react-icons/io";

const MenuList = ({ title, classActive, data }) => {
  return (
    <MenuBlock className={`menu__column ${classActive && "active"}`}>
      <button type="button" className="menu__over">
        {title}
        <span>
          <IoMdArrowDropdown color="black" size="20" />
        </span>
      </button>
      <List className="menu__list">
        {data.map((item, i) => (
          <Item className="menu__item" key={i}>
            <Link to={item.path}>{item.name}</Link>
          </Item>
        ))}
      </List>
    </MenuBlock>
  );
};

export default MenuList;
