import { useContext } from "react";
import { AppStateContext } from "../ContextApi/AppStateContext";
import { Close } from "@icon-park/react";
const SignUpModal = () => {
  const { registerModal, setRegisterMoadal } = useContext(AppStateContext);
  return (
    <div
      className={`fixed top-0  h-screen w-screen flex  ${
        registerModal ? "left-0" : "left-[-4000px]"
      }`}
    >
      <div className="flex flex-col h-[500px] w-[400px] max-w-[500px] bg-white m-auto py-4 px-6 relative z-10">
        <Close
          strokeWidth={5}
          onClick={() => {
            setRegisterMoadal(false);
          }}
          className="absolute right-5 top-5 cursor-pointer"
        />
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
          <span className="mt-3 text-gray-500 cursor-pointer hover:text-[#CEA384]">
            click here to Register
          </span>
        </div>
      </div>
      <div
        onClick={() => {
          setRegisterMoadal(false);
        }}
        className="absolute w-full h-full bg-[rgba(32,32,32,0.5)] "
      ></div>
    </div>
  );
};

export default SignUpModal;
