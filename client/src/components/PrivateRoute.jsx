import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);

  if (userInfo) {
    return <Outlet />;
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
