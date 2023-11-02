import { createContext, useState } from "react";

export const AppStateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cartModal, setCartModal] = useState(false);
  return (
    <AppStateContext.Provider value={{ cartModal, setCartModal }}>
      {children}
    </AppStateContext.Provider>
  );
};
