import { NavbarRight } from "./HeaderStyle";
import { BiPlusMedical } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderRight = ({ displaySubmenu }) => {
  return (
    <NavbarRight className="navbar__right">
      <ul className="navbar__primary">
        <li className="navbar__add">
          <button
            type="button"
            onClick={(e) => displaySubmenu({ e, type: "navbar_add" })}
          >
            <BiPlusMedical color="white" size="20px" />
          </button>
        </li>
        <li className="navbar__translate">
          <span>en</span>
        </li>
        <li className="navbar__notifications">
          <button type="button" onClick={(e) => displaySubmenu(e)}>
            <IoIosNotifications color="white" size={23} />
            <span className="navbar__notifications-counter">1</span>
          </button>
        </li>
        <li className="navbar__user">
          <button type="button" onClick={(e) => displaySubmenu(e)}>
            <span>t</span>
          </button>
        </li>
        <li className="navabr__search">
          <Link to="/">
            <FaSearch color="white" size={21} />
          </Link>
        </li>
      </ul>
    </NavbarRight>
  );
};

export default HeaderRight;
