import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [searchingText, setSearchingText] = useState("");

  return (
    <GlobalContext.Provider value={{ searchingText, setSearchingText }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalProvider, useGlobalContext };
