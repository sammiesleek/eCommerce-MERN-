import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { StatusAlertService } from "react-status-alert";
import { useRegisterMutation } from "../slices/usersApiSlice";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    passwordCheck: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const redirect = searchParam.get("redirect") || "/";

  const validateEmail = (inputEmail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(inputEmail);
  };

  // useEffect(() => {
  //   if (userInfo) {
  //     navigate(redirect);
  //   }
  // }, [userInfo, navigate, redirect]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName !== "" && formData.lastName !== "") {
      if (validateEmail(formData.email)) {
        if (formData.address !== "") {
          if (formData.password !== "") {
            if (formData.password === formData.passwordCheck) {
              delete formData.passwordCheck;
              formData.isAdmin = true;

              try {
                const res = await register(formData).unwrap();
                dispath(setCredentials({ ...res }));
                navigate(redirect);
              } catch (error) {
                toast.error(error?.data?.message);
              }
            } else {
              toast.error("passwords must match !");
            }
          } else {
            toast.error("Please enter your password");
          }
        } else {
          toast.error("Please enter your address");
        }
      } else {
        toast.error("Please enter a valid email");
      }
    } else {
      toast.error("Please enter your full name");
    }
  };

  return (
    <div className="pt-[80px]">
      <div className="flex flex-col  w-[400px] max-w-[500px] bg-white m-auto py-4 px-6 relative z-10">
        <h4 className="text-center text-3xl font-semibold my-5">Register</h4>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-10 gap-y-10">
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
                placeholder="First Name"
                type="text"
                value={formData.firstName}
                name="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
                placeholder="Last Name"
                type="text"
                value={formData.lastName}
                name="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
                placeholder="Email Address"
                // type="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
                placeholder="Phone Number"
                type="tel"
                value={formData.phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
                placeholder="Address"
                type="tel"
                value={formData.address}
                name="address"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
                placeholder="Password"
                type="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
                placeholder=" Confirm Password"
                type="password"
                value={formData.passwordCheck}
                name="passwordCheck"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-center items-center mt-20 flex-col">
            <button
              style={{
                letterSpacing: "3px",
                alignContent: "center",
                justifySelf: "center",
              }}
              className="flex w-fit bg-black text-white font-semibold px-6 py-3 hover:bg-[#CEA384] transition-all ease-linear"
            >
              REGISTER
            </button>
            <Link
              to="/login"
              className="mt-3 text-gray-500 cursor-pointer hover:text-[#CEA384]"
            >
              click here to Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
