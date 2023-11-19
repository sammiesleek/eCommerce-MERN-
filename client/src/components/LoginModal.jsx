import { Close } from "@icon-park/react";

import { useContext } from "react";
import { AppStateContext } from "../ContextApi/AppStateContext";

const LoginModal = () => {
  const { loginModal, setLoginModal, setRegisterMoadal } =
    useContext(AppStateContext);
  return (
    <div
      className={`fixed top-0  h-screen w-screen flex  ${
        loginModal ? "left-0" : "left-[-4000px]"
      }`}
    >
      <div className="flex flex-col h-[500px] w-[400px] max-w-[500px] bg-white m-auto py-4 px-6 relative z-10">
        <Close
          strokeWidth={5}
          onClick={() => {
            setLoginModal(false);
          }}
          className="absolute right-5 top-5 cursor-pointer hover:text-[#CEA384] transition-all ease-linear"
        />
        <h4 className="text-center text-3xl font-semibold my-5">Login</h4>

        <div className="flex flex-col mt-10 gap-y-10">
          <div className="flex w-full">
            <input
              className="border-b focus:outline-none focus:border-b-black w-full py-1 px-2 font-normal text-base"
              placeholder="Email Address"
              type="text"
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
            LOGIN
          </button>
          <span
            onClick={() => {
              setRegisterMoadal(true);
              setLoginModal(false);
            }}
            className="mt-3 text-gray-500 cursor-pointer hover:text-[#CEA384]"
          >
            Register
          </span>
          <span className="mt-3 text-gray-500 cursor-pointer hover:text-[#CEA384]">
            Forgot your Password?
          </span>
        </div>
      </div>
      <div
        onClick={() => {
          setLoginModal(false);
        }}
        className="absolute w-full h-full bg-[rgba(32,32,32,0.5)] "
      ></div>
    </div>
  );
};

export default LoginModal;
