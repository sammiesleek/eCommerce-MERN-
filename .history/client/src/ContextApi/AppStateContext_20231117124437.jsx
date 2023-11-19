import { createContext, useState } from "react";

export const AppStateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cartModal, setCartModal] = useState(false);
  const [registerModal, setRegisterMoadal] = useState(false);
  const [adminSideBar, setAdminSideBar] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [message, setMessage] = useState("info");
  const [active, setActive] = useState(true);
  const [severity, setSeverity] = useState("info");
  return (
    <AppStateContext.Provider
      value={{
        cartModal,
        setCartModal,
        registerModal,
        setRegisterMoadal,
        loginModal,
        setLoginModal,
        message,
        setMessage,
        severity,
        setSeverity,
        active,
        setActive,
        adminSideBar,
        setAdminSideBar,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
