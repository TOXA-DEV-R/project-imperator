import { createContext, useContext, useState } from "react";

const HeaderContext = createContext();

const HeaderProvider = ({ children }) => {
  const [navbarSubmenuControl, setNavbarSubmenuControl] = useState([
    { name: "ADD", control: false, id: 1 },
    { name: "TOOLTIP", control: false, id: 2 },
    { name: "USER", control: false, id: 3 },
  ]);
  const [navbarUser, setNavbarUser] = useState(false);
  const [searchBarControl, setSearchBarControl] = useState(false);

  return (
    <HeaderContext.Provider
      value={{
        navbarSubmenuControl,
        setNavbarSubmenuControl,
        navbarUser,
        setNavbarUser,
        searchBarControl,
        setSearchBarControl,
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
