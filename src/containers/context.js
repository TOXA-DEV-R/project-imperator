/** @format */

import { createContext, useContext, useEffect, useState } from "react";

const ContainersContext = createContext();

const ContainersProvider = ({ children }) => {
  const [submenuStyle, setSubmenuStyle] = useState({});
  const [submenuContol, setSubmenuContol] = useState(false);

  const openSubmenu = (props) => {
    setSubmenuStyle({ left: props.center, top: props.bottom });
    setSubmenuContol(false);
  };

  const dataControl = (listName) => {
    switch (listName) {
      case "streaming":
        return { ctrol: true, category: "popular" };
      case "for_rent":
        return { ctrol: true, category: "top_rated" };
      case "thisWeek":
        return { ctrol: true, category: "top_rated" };
      case "in_theatre" || "movies":
        return { ctrol: true, category: "upcoming" };
      case "recommendations" || "today":
        return { ctrol: true, category: "804435/recommendations" };
      case "now_playing":
        return { ctrol: true, category: "now_playing" };
      case "on_tv":
        return { ctrol: false };
      default:
        return listName;
    }
  };

  return (
    <ContainersContext.Provider
      value={{
        submenuStyle,
        setSubmenuStyle,
        submenuContol,
        setSubmenuContol,
        openSubmenu,
        dataControl,
      }}
    >
      {children}
    </ContainersContext.Provider>
  );
};

const useContainersContext = () => {
  return useContext(ContainersContext);
};

export { ContainersProvider, useContainersContext };
