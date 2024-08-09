// import { Close } from "@icon-park/react";
// import { AppStateContext } from "../ContextApi/AppStateContext";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/usersApiSlice";
// import { setCredentials } from "../slices/authSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { StatusAlertService } from "react-status-alert";
import { AppStateContext } from "../ContextApi/AppStateContext";
// import { useGoogleMutation } from "../slices/googleAuthApiSlice";
const Login = () => {
  const { setProfile } = useContext(AppStateContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const dispath = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const redirect = searchParam.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email !== "" && formData.password) {
      try {
        const res = await login(formData).unwrap();
        // dispath(setCredentials({ ...res }));
        setProfile(res);
        navigate(redirect);
      } catch (error) {
        toast.error(error?.data?.message || error.error);
        // StatusAlertService.showError(error.error);
      }
    } else {
      StatusAlertService.showError("fields can not be empty");
    }
  };
  return (
    <div className="">
      <div className="flex flex-col h-[500px] w-[400px] max-w-[500px] bg-white m-auto py-4 px-6 relative z-10">
        <h4 className="text-center text-3xl font-semibold my-5">Login</h4>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col mt-10 gap-y-5">
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-4 px-2 font-normal text-base"
                placeholder="Email Address"
                type="text"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-4 px-2 font-normal text-base"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-10 flex-col">
            <button
              onClick={() => handleSubmit()}
              style={{
                letterSpacing: "3px",
                alignContent: "center",
                justifySelf: "center",
              }}
              disabled={isLoading}
              className="flex w-fit bg-black text-white font-semibold px-6 py-3 hover:bg-[#CEA384] transition-all ease-linear"
            >
              LOGIN
            </button>
            {isLoading && <Loader size="40" />}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
              className="mt-3 text-gray-500 cursor-pointer hover:text-[#CEA384]"
            >
              Click here Register
            </Link>
            <span className="mt-3 text-gray-500 cursor-pointer hover:text-[#CEA384]">
              Forgot your Password?
            </span>
          </div>
        </form>
        <button className=" flex px-4 py-2 border items-center justify-center mt-5 gap-x-4 w-fit mx-auto">
          <img className="h-5 w-5" src="/images/icons/google.png" alt="" />{" "}
          <a href="http://localhost:5000/api/auth/google">Login with Google</a>
        </button>
      </div>
    </div>
  );
};

export default Login;
