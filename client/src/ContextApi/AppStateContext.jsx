import { createContext, useState } from "react";

export const AppStateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cartModal, setCartModal] = useState(false);
  const [registerModal, setRegisterMoadal] = useState(false);
  const [adminSideBar, setAdminSideBar] = useState(true);
  const [loginModal, setLoginModal] = useState(false);
  const [message, setMessage] = useState("info");
  const [severity, setSeverity] = useState("info");
  const [isError, setIsError] = useState(false);
  const [qty, setQty] = useState(1);
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
        isError,
        setIsError,
        adminSideBar,
        setAdminSideBar,
        qty,
        setQty,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
