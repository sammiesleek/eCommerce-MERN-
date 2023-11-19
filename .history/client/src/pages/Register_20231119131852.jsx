import { useContext, useEffect } from "react";
import { AppStateContext } from "../ContextApi/AppStateContext";
import { Close } from "@icon-park/react";
import { Link } from "react-router-dom";
const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { registerModal, setRegisterMoadal } = useContext(AppStateContext);
  return (
    <div className="pt-[100px]">
      <div className="flex flex-col  w-[400px] max-w-[500px] bg-white m-auto py-4 px-6 relative z-10">
        <h4 className="text-center text-3xl font-semibold my-5">Register</h4>

        <div className="flex flex-col mt-10 gap-y-10">
          <div className="flex w-full">
            <input
              className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
              placeholder="Full Name"
              type="text"
            />
          </div>
          <div className="flex w-full">
            <input
              className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
              placeholder="Email Address"
              type="email"
            />
          </div>
          <div className="flex w-full">
            <input
              className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
              placeholder="Phone Number"
              type="tel"
            />
          </div>
          <div className="flex w-full">
            <input
              className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
              placeholder="Password"
              type="password"
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
            to="/"
            className="mt-3 text-gray-500 cursor-pointer hover:text-[#CEA384]"
          >
            click here to Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
