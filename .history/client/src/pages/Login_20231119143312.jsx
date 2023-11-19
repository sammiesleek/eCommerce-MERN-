import { Close } from "@icon-park/react";
import { AppStateContext } from "../ContextApi/AppStateContext";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import { useLoginMutation } from "../slices/usersApiSlice";
import { setCredentials } from "../slices/authSlice";
const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //  const [formData, setFormData] = useState({
  //    name: "",
  //    email: "",
  //    address: "",
  //    password:"",
  //    passwordCheck:"",
  //    phone:""
  //  });

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

  const dispath = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading, error }] = useLoginMutation();
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

    if (formData.email !== "" && formData.email) {
      console.log(formData);
      // try {
      const res = await login({ formData }).unwrap();
      dispath(setCredentials({ ...res }));
      navigate(redirect);
      // } catch (e) {
      // console.log(error);
      // }
    } else {
      console.log("fields can not be empty");
    }
  };
  return (
    <div className="p-[130px]">
      <div className="flex flex-col h-[500px] w-[400px] max-w-[500px] bg-white m-auto py-4 px-6 relative z-10">
        <h4 className="text-center text-3xl font-semibold my-5">Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-10 gap-y-10">
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
                placeholder="Email Address"
                type="text"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
                placeholder="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-20 flex-col">
            <button
              onClick={() => handleSubmit()}
              style={{
                letterSpacing: "3px",
                alignContent: "center",
                justifySelf: "center",
              }}
              className="flex w-fit bg-black text-white font-semibold px-6 py-3 hover:bg-[#CEA384] transition-all ease-linear"
            >
              LOGIN
            </button>
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
      </div>
    </div>
  );
};

export default Login;
