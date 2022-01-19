import React, { useContext, useState } from "react";

const HeaderContext = React.createContext();

const HeaderProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (props) => {
    console.log(props);
    // const page = sublinks.find((link) => link.page === text);
    // setPage(page);
    // setLocation(coordinates);
    // setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <HeaderContext.Provider
      value={{
        openSubmenu,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
// make sure use
export const useHeaderContext = () => {
  return useContext(HeaderContext);
};

export { HeaderContext, HeaderProvider };
