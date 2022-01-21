import React, { useEffect, Fragment } from "react";
import { Navbar } from "./HeaderStyle";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
import Submenu from "./Submenu";
import { useHeaderContext } from "./context";
import SearchBar from "./SearchBar";

const Header = () => {
  const {
    openSubmenu,
    navbarSubmenuControl,
    setNavbarSubmenuControl,
    searchBarControl,
    setSubmenuContol,
  } = useHeaderContext();

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
    setSubmenuContol(false);

    openSubmenu({ center, bottom });
  };

  useEffect(() => {}, [setNavbarSubmenuControl]);

  return (
    <Fragment>
      <Navbar className="navbar">
        <div className="navbar__container">
          <HeaderLeft />
          <HeaderRight displaySubmenu={displaySubmenu} />
        </div>
      </Navbar>
      <Submenu />
      {searchBarControl && <SearchBar />}
    </Fragment>
  );
};

export default Header;
