import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
const AdminRoute = () => {
  const a = 1;
  const b = 2;

  if (a < b) {
    return (
      <>
        <Header />
        {/* <SideBar /> */}
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/" replace />;
  }
};

export default AdminRoute;
