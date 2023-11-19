import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";
const PrivateRoute = () => {
  const a = 1;
  const b = 2;

  if (a < b) {
    return (
      <>
        <Header />
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/" replace />;
  }
};

export default PrivateRoute;
