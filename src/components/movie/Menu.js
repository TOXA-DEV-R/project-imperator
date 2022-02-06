import React from "react";
import MenuList from "./MenuList";
import { BasicMenue } from "./styles";
import data from "./data";

const Menu = () => {
  return (
    <BasicMenue className="basic__menue">
      <MenuList title="OverView" classActive={true} data={data.overView} />
      <MenuList title="Media" classActive={false} data={data.media} />
      <MenuList title="Fandom" classActive={false} data={data.fandom} />
      <MenuList title="Share" classActive={false} data={data.share} />
    </BasicMenue>
  );
};

export default Menu;
