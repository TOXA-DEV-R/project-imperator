import React from "react";
import { Navbar } from "./HeaderStyle";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";

const Header = () => {
  return (
    <Navbar className="navbar">
      <div className="navbar__container">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </Navbar>
  );
};

export default Header;
