import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const a = 1;
  const b = 2;
  return a < ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
