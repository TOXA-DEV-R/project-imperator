import { useEffect } from "react";
import {
  NavbarAdd,
  NavbarNotifications,
  NavbarPrimary,
  NavbarRight,
  NavbarSearch,
  NavbarTranslate,
  NavbarUser,
  NavbarUserContent,
} from "./HeaderStyle";
import { BiPlusMedical } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useHeaderContext } from "./context";
import OutsideClickHandler from "react-outside-click-handler";

const HeaderRight = ({ displaySubmenu }) => {
  const {
    setNavbarUser,
    navbarUser,
    searchBarControl,
    setSearchBarControl,
    navbarSubmenuControl,
    setNavbarSubmenuControl,
    submenuContol,
    setSubmenuContol,
  } = useHeaderContext();

  useEffect(() => {
    if (submenuContol) {
      setNavbarSubmenuControl(
        navbarSubmenuControl.map((item) => {
          return { ...item, control: false };
        })
      );
    }
  }, [submenuContol]);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setSubmenuContol(true);
      }}
    >
      <NavbarRight className="navbar__right">
        <NavbarPrimary className="navbar__primary">
          <NavbarAdd className="navbar__add">
            <button type="button" onClick={(e) => displaySubmenu({ e, id: 1 })}>
              <BiPlusMedical color="white" size="20px" />
            </button>
          </NavbarAdd>
          <NavbarTranslate className="navbar__translate">
            <span>en</span>
          </NavbarTranslate>
          <NavbarNotifications className="navbar__notifications">
            <button type="button" onClick={(e) => displaySubmenu({ e, id: 2 })}>
              <IoIosNotifications color="white" size={23} />
              <span className="navbar__notifications-counter">1</span>
            </button>
          </NavbarNotifications>
          <NavbarUser className="navbar__user">
            <button
              type="button"
              onClick={(e) => displaySubmenu({ e, id: 3 })}
              onMouseOver={() => setNavbarUser(!navbarUser)}
              onMouseOut={() => setNavbarUser(!navbarUser)}
            >
              <span>J</span>
            </button>
            {navbarUser && (
              <NavbarUserContent className="navbar__user-content">
                <span className="submenu__dropup">
                  <IoMdArrowDropup color="white" size={28} />
                </span>
                <li>
                  <span>Profile and Settings</span>
                </li>
              </NavbarUserContent>
            )}
          </NavbarUser>
          <NavbarSearch className="navbar__search">
            <button
              type="button"
              onClick={() => setSearchBarControl((ct) => !ct)}
            >
              {searchBarControl ? (
                <AiOutlineClose color="white" size={21} />
              ) : (
                <FaSearch color="#00b4e4" size={21} />
              )}
            </button>
          </NavbarSearch>
        </NavbarPrimary>
      </NavbarRight>
    </OutsideClickHandler>
  );
};

export default HeaderRight;
