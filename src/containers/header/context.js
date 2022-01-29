import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [submenuStyle, setSubmenuStyle] = useState({});
  const [navbarSubmenuControl, setNavbarSubmenuControl] = useState([
    { name: "ADD", control: false, id: 1 },
    { name: "TOOLTIP", control: false, id: 2 },
    { name: "USER", control: false, id: 3 },
  ]);
  const [navbarUser, setNavbarUser] = useState(false);
  const [searchBarControl, setSearchBarControl] = useState(false);
  const [submenuContol, setSubmenuContol] = useState(false);

  const openSubmenu = (props) => {
    setSubmenuStyle({ left: props.center, top: props.bottom });
    setSubmenuContol(false);
  };

  return (
    <HeaderContext.Provider
      value={{
        openSubmenu,
        submenuStyle,
        navbarSubmenuControl,
        setNavbarSubmenuControl,
        navbarUser,
        setNavbarUser,
        searchBarControl,
        setSearchBarControl,
        submenuContol,
        setSubmenuContol,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export { HeaderProvider, useHeaderContext };
