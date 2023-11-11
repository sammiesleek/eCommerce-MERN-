import { createContext, useState } from "react";

export const AppStateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cartModal, setCartModal] = useState(false);
  const [registerModal, setRegisterMoadal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  return (
    <AppStateContext.Provider
      value={{
        cartModal,
        setCartModal,
        registerModal,
        setRegisterMoadal,
        loginModal,
        setLoginModal,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
