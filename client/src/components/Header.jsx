import {
  ApplicationMenu,
  Close,
  Like,
  MallBag,
  MenuUnfold,
  Search,
  User,
} from "@icon-park/react";
import { useState } from "react";
import { Link } from "react-router-dom";
{
  /* <MallBag theme="outline" size="24" fill="#333" />; */
}
import { useContext } from "react";
import { AppStateContext } from "../ContextApi/AppStateContext";
import CartModal from "./CartModal";
import LoginModal from "./LoginModal";
import { useSelector } from "react-redux";
import SignUpModal from "./SignUpModal";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const {
    cartModal,
    setCartModal,
    loginModal,
    setLoginModal,
    registerModal,
    setRegisterMoadal,
    message,
    setMessage,
    severity,
    setSeverity,
    active,
    setActive,
    isError,
    setIsError,
  } = useContext(AppStateContext);
  const [navState, setNavState] = useState(false);
  return (
    <div className="flex w-full border-b justify-center items-center fixed bg-transparent py-3 px-5 bg-white z-50 top-0">
      <div className="flex  w-full h-full items-center py-4">
        <div className="flex md:hidden">
          <MenuUnfold
            onClick={() => setNavState(!navState)}
            theme="outline"
            size="24"
            fill="#333"
          />
          {/* <MenuUnfoldOne theme="outline" size="24" fill="#333" /> */}
        </div>
        <div className="hidden md:flex justify-self-center  mr-20">
          <Link to="/" className="font-bold text-xl">
            Apparels
          </Link>
        </div>
        <div
          className={` transition-all  ease-in-out flex flex-col absolute h-screen bg-[rgba(128,128,128,0.7)] w-screen ${
            navState ? "left-0" : "left-[-20000px]"
          }  top-0 md:w-fit md:bg-transparent md:flex-row md:h-fit  md:static `}
        >
          <Close
            onClick={() => {
              setNavState(false);
            }}
            theme="outline"
            size="24"
            fill="#333"
            strokeWidth={3}
            className="md:hidden right-6 cursor-pointer absolute top-5 bg-white  rounded-full p-2"
          />
          <div className="flex flex-col md:flex-row   w-[300px]   md:w-fit md:bg-transparent h-full ">
            <div className=" md:hidden flex justify-self-center py-8 w-full pl-3  border-b bg-gray-100">
              <h1 className="font-bold text-3xl">Apparels</h1>
            </div>
            <div className="flex md:hidden  w-full border-b">
              <span className="w-1/2 bg-black py-3 flex justify-center  items-center">
                <ApplicationMenu
                  theme="outline"
                  size="28"
                  fill="#ffffff"
                  strokeWidth={2}
                />
                <p className="text-white ml-2 mb-0">MENU</p>
              </span>
              <span className="w-1/2 py-3 bg-white flex justify-center  items-center">
                <User
                  className="flex cursor-pointer"
                  theme="outline"
                  size="24"
                  fill="#333"
                  onClick={() => {
                    setLoginModal(true);
                  }}
                />
                <p className="mb-0 ml-3 text-black">LOGIN</p>
              </span>
            </div>
            <div className="flex flex-col md:flex-row  mt-5 md:mt-0 lg:mt-0 pl-3 gap-x-5">
              <Link
                to="/"
                className="font-normal py-8 md:py-0  border-b md:border-b-0 text-2xl md:text-lg"
              >
                {" "}
                Home
              </Link>
              <Link className="font-normal py-8 md:py-0  border-b md:border-b-0 text-2xl md:text-lg">
                {" "}
                Latest Product
              </Link>
              <Link className="font-normal py-8 md:py-0  border-b md:border-b-0 text-2xl md:text-lg">
                {" "}
                Contact Us{" "}
              </Link>
              <Link className="font-normal py-8 md:py-0  border-b md:border-b-0 text-2xl md:text-lg">
                {" "}
                About Us
              </Link>
            </div>
          </div>
        </div>

        <div className="flex h-full justify-center items-center gap-x-6  justify-items-end ml-auto">
          <span>
            <Search
              className="flex cursor-pointer"
              theme="outline"
              size="24"
              fill="#333"
            />
          </span>
          <span className="hidden md:flex relative profile_click">
            <span className="absolute top-3 right-0    flex-col py-4 px-3 w-[200px] profile_tab">
              <span className="bg-white border flex flex-col py-4 text-base  text-black gap-y-1">
                <Link
                  to="/login"
                  className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                >
                  Register
                </Link>
                <Link className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer">
                  Profile
                </Link>
              </span>
            </span>
            <User
              className="flex cursor-pointer "
              theme="outline"
              size="24"
              fill="#333"
            />
          </span>
          <span>
            <Like
              className="flex cursor-pointer"
              theme="outline"
              size="24"
              fill="#333"
            />
          </span>
          <span className=" relative ">
            {cartItems.length > 0 && (
              <span className="cart_count font-bold text-sm text-white">
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
            <MallBag
              onClick={() => {
                setCartModal(!cartModal);
              }}
              className="flex cursor-pointer"
              theme="outline"
              size="24"
              fill="#333"
            />
          </span>
        </div>
      </div>
      <CartModal cartItems={cartItems} />
      <LoginModal />
      <SignUpModal />
    </div>
  );
};

export default Header;
