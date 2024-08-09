import { Outlet, Navigate } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { useAuthvalidateMutation } from "../../slices/usersApiSlice";
import { useState, useEffect } from "react";
import Loader from "../../components/Loader";

const AdminRoute = () => {
  const [isAdmin, setIsAdmin] = useState(null); // null indicates loading state
  const [validateAuth] = useAuthvalidateMutation();

  useEffect(() => {
    const validateUser = async () => {
      try {
        const res = await validateAuth().unwrap();
        setIsAdmin(res.user.isAdmin);
      } catch (error) {
        console.error("Error validating admin:", error);
        setIsAdmin(false); // Not an admin or error occurred
      }
    };

    validateUser();
  }, [validateAuth]);

  if (isAdmin === null) return <Loader />;

  return isAdmin ? (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

export default AdminRoute;
