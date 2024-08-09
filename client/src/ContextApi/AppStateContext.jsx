import { createContext, useEffect, useState } from "react";
import { useAuthvalidateMutation } from "../slices/usersApiSlice";

export const AppStateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cartModal, setCartModal] = useState(false);
  const [registerModal, setRegisterMoadal] = useState(false);
  const [adminSideBar, setAdminSideBar] = useState(true);
  const [loginModal, setLoginModal] = useState(false);
  const [profile, setProfile] = useState({});
  const [message, setMessage] = useState("info");
  const [severity, setSeverity] = useState("info");
  const [isError, setIsError] = useState(false);
  const [qty, setQty] = useState(1);
  const [addProduct, setAddProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [validateGoogle] = useAuthvalidateMutation();

  useEffect(() => {
    const validateGoogleAsync = async () => {
      try {
        const res = await validateGoogle().unwrap();
        setProfile(res.user);
      } catch (error) {
        // console.error(error);
      }
    };

    validateGoogleAsync();
  }, [validateGoogle]);

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
        addProduct,
        setAddProduct,
        editProduct,
        setEditProduct,
        profile,
        setProfile,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
