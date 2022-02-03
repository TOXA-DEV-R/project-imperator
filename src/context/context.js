/** @format */

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [searchBarControl, setSearchBarControl] = useState(false);
  const [searchingText, setSearchingText] = useState("");
  const [strongCtrSubmenu, setStrongCtrSubmenu] = useState(false);
  const [searchingUpAndDown, setSearchingUpAndDown] = useState(64);
  const [pages, setPages] = useState(1);

  return (
    <GlobalContext.Provider
      value={{
        searchBarControl,
        setSearchBarControl,
        searchingText,
        setSearchingText,
        strongCtrSubmenu,
        setStrongCtrSubmenu,
        searchingUpAndDown,
        setSearchingUpAndDown,
        pages,
        setPages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
