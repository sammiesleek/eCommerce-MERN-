import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";
const PrivateRoute = () => {
  const a = 1;
  const b = 2;
  return a < b ? ((<Header />), (<Outlet />)) : <Navigate to="/" replace />;
};

export default PrivateRoute;
