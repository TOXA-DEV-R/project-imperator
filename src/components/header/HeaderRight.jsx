import { useEffect } from "react";
import { NavbarRight } from "./HeaderStyle";
import { BiPlusMedical } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { useHeaderContext } from "./context";

const HeaderRight = ({ displaySubmenu }) => {
  const {
    setNavbarUser,
    navbarUser,
    searchBarControl,
    setSearchBarControl,
    setNavbarSubmenuControl,
    navbarSubmenuControl,
    submenuContol,
  } = useHeaderContext();

  const eventDocument = (e) => {
    // console.log(e);
    if (submenuContol) {
      // setNavbarSubmenuControl(
      //   navbarSubmenuControl.map((item) => ({ ...item, control: false }))
      // );
    }
  };

  useEffect(() => {
    window.addEventListener("click", eventDocument);
  }, [navbarSubmenuControl]);

  return (
    <NavbarRight className="navbar__right">
      <ul className="navbar__primary">
        <li className="navbar__add">
          <button type="button" onClick={(e) => displaySubmenu({ e, id: 1 })}>
            <BiPlusMedical color="white" size="20px" />
          </button>
        </li>
        <li className="navbar__translate">
          <span>en</span>
        </li>
        <li className="navbar__notifications">
          <button type="button" onClick={(e) => displaySubmenu({ e, id: 2 })}>
            <IoIosNotifications color="white" size={23} />
            <span className="navbar__notifications-counter">1</span>
          </button>
        </li>
        <li className="navbar__user">
          <button
            type="button"
            onClick={(e) => displaySubmenu({ e, id: 3 })}
            onMouseOver={() => setNavbarUser(!navbarUser)}
            onMouseOut={() => setNavbarUser(!navbarUser)}
          >
            <span>J</span>
          </button>
          {navbarUser && (
            <ul className="navbar__user-content">
              <span className="submenu__dropup">
                <IoMdArrowDropup color="white" size={28} />
              </span>
              <li>
                <span>Profile and Settings</span>
              </li>
            </ul>
          )}
        </li>
        <li className="navbar__search">
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
        </li>
      </ul>
    </NavbarRight>
  );
};

export default HeaderRight;
