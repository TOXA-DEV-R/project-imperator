import { createContext, useContext, useState, useEffect } from "react";

const sectionContext = createContext();

const SectionsProvider = ({ children }) => {
  return (
    <sectionContext.Provider value={{}}>{children}</sectionContext.Provider>
  );
};

const useSectionContext = () => {
  return useContext(sectionContext);
};
export { SectionsProvider, useSectionContext };
