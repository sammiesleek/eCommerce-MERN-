import { useContext } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { AppStateContext } from "../ContextApi/AppStateContext";

const PrivateRoute = () => {
  const { profile } = useContext(AppStateContext);
  console.log(profile);
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
