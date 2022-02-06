/** @format */

import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [globalSearchBar, setGlobalSearchBar] = useState(false);
  const [globalSearchText, setGlobalSearchText] = useState("");

  useEffect(() => {}, [globalSearchBar, globalSearchText]);

  return (
    <GlobalContext.Provider
      value={{
        globalSearchBar,
        setGlobalSearchBar,
        globalSearchText,
        setGlobalSearchText,
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
