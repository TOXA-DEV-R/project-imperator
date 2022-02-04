/** @format */

import React, { useEffect, useState } from "react";
import { Navbar, NavbarContainer } from "./styles";
import NavbarRightRow from "../../components/header/NavbarRightRow";
import NavbarLeftRow from "../../components/header/NavbarLeftRow";
import Submenu from "../../components/header/submenu/Submenu";
import { useHeaderContext } from "./context";
import { useContainersContext } from "../context";
import useScrollListener from "./useScrollListener";
import Sticky from "react-stickynode";
const Header = () => {
  const { navbarSubmenuControl, setNavbarSubmenuControl } = useHeaderContext();
  const { openSubmenu } = useContainersContext();
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();
  const [headerClass, setHeaderClass] = useState("");

  const displaySubmenu = (props) => {
    const { id, e } = props;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom + 13;

    setNavbarSubmenuControl(
      navbarSubmenuControl.map((item) => {
        return id === item.id
          ? { ...item, control: !item.control }
          : { ...item, control: false };
      })
    );

    openSubmenu({ center, bottom });
  };

  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setHeaderClass(true);
    }
    if (status.status === Sticky.STATUS_ORIGINAL) {
      setHeaderClass(false);
    }
  };

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden");

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY, setNavbarSubmenuControl]);

  return (
    <Sticky innerZ={1000} onStateChange={handleStateChange}>
      <Navbar
        className={`navbar ${navClassList.join(" ")} ${
          headerClass ? "stick-active" : "stick"
        }`}
      >
        <NavbarContainer className="navbar__container">
          <NavbarLeftRow />
          <NavbarRightRow displaySubmenu={displaySubmenu} />
        </NavbarContainer>
      </Navbar>
      <Submenu />
    </Sticky>
  );
};

export default Header;
