import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthvalidateMutation } from "../slices/usersApiSlice";
import Loader from "./Loader";

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [validateAuth, { isSuccess }] = useAuthvalidateMutation();

  useEffect(() => {
    const validateGoogleAsync = async () => {
      try {
        const res = await validateAuth().unwrap();
        setIsAuthenticated(res.message === "success");
      } catch (error) {
        // Handle error, e.g., log it or display an error message
      } finally {
        setIsLoading(false);
      }
    };

    validateGoogleAsync();
  }, [validateAuth]);

  if (isLoading) return <Loader />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
