import { createContext, useContext, useState } from "react";

const ContainersContext = createContext();

const ContainersProvider = ({ children }) => {
  const [submenuStyle, setSubmenuStyle] = useState({});
  const [submenuContol, setSubmenuContol] = useState(false);
  const [strongCtrSubmenu, setStrongCtrSubmenu] = useState(false);

  const openSubmenu = (props) => {
    setSubmenuStyle({ left: props.center, top: props.bottom });
    setSubmenuContol(false);
  };
  return (
    <ContainersContext.Provider
      value={{
        submenuStyle,
        setSubmenuStyle,
        submenuContol,
        setSubmenuContol,
        openSubmenu,
        strongCtrSubmenu,
        setStrongCtrSubmenu,
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
