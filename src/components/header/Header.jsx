import React, { useState, useRef, useEffect, Fragment } from "react";
import { Navbar } from "./HeaderStyle";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
import Submenu from "./Submenu";
import { useHeaderContext } from "./context";

const Header = () => {
  const [navbaraAdd, setNavbaraAdd] = useState(false);
  const [navbarNotifications, setNavbarNotifications] = useState(false);
  const [navbarUser, setNavbarUser] = useState(false);
  const clclc = useHeaderContext();
  console.log(clclc);

  const displaySubmenu = (res) => {
    const tempBtn = res.e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    if (res.type === "navbar_add") {
      setNavbaraAdd(!navbaraAdd);
      // openSubmenu({ center, bottom });
    }
  };

  return (
    <Fragment>
      <Navbar className="navbar">
        <div className="navbar__container">
          <HeaderLeft />
          <HeaderRight
            setNavbaraAdd={setNavbaraAdd}
            setNavbarNotifications={setNavbarNotifications}
            setNavbarUser={setNavbarUser}
            displaySubmenu={displaySubmenu}
          />
        </div>
      </Navbar>
      <Submenu
        navbaraAdd={navbaraAdd}
        navbarNotifications={navbarNotifications}
        navbarUser={navbarUser}
      />
    </Fragment>
  );
};

export default Header;
