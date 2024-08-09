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
import { Link, useNavigate } from "react-router-dom";
{
  /* <MallBag theme="outline" size="24" fill="#333" />; */
}
import { useContext } from "react";
import { AppStateContext } from "../ContextApi/AppStateContext";
import CartModal from "./CartModal";
import LoginModal from "./LoginModal";
import { useSelector, useDispatch } from "react-redux";
import SignUpModal from "./SignUpModal";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  // const { userInfo } = useSelector((state) => state.auth);
  const { cartModal, setCartModal, profile } = useContext(AppStateContext);
  const [navState, setNavState] = useState(false);
  const [logoutApiCall] = useLogoutMutation();
  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const handleCart = () => {
    // toast.info("Your cart is empty");
    cartItems.length > 0 && setCartModal(!cartModal);
    if (cartItems.length < 1) {
      toast.info("Your cart is empty");
    }
  };
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
            <span className="font-bold text-[#10B981] text-3xl">WizzBee</span>
          </Link>
        </div>
        <div
          className={` transition-all z-50  ease-in-out flex flex-col absolute h-screen bg-[rgba(128,128,128,1)] w-screen ${
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
          <div className="flex flex-col md:flex-row bg-white   w-[300px]   md:w-fit md:bg-transparent h-full ">
            <div className=" md:hidden flex justify-self-center py-6 w-full pl-3  border-b bg-gray-100">
              <Link to="/" className="font-bold text-xl">
                <span className="font-bold text-[#10B981] text-3xl">
                  WizzBee
                </span>
              </Link>
            </div>
            <div className="flex md:hidden  w-full border-b">
              {/* <span className="w-1/2 bg-black py-3 flex justify-center  items-center">
                <ApplicationMenu
                  theme="outline"
                  size="28"
                  fill="#ffffff"
                  strokeWidth={2}
                />
                <p className="text-white ml-2 mb-0">MENU</p>
              </span> */}
              {/* <span className="w-1/2 py-3 bg-white flex justify-center profile_click  relative  items-center">
                <span className="absolute top-3 right-0    flex-col py-4 px-3 w-[200px] profile_tab">
                  <span className="bg-white border flex flex-col pb-4 text-base  text-black gap-y-1">
                    {profile._id && (
                      <span
                        to="/login"
                        className="bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                      >
                        welcome, {profile.firstName}
                      </span>
                    )}
                    {!profile._id && (
                      <Link
                        to="/login"
                        className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                      >
                        Login
                      </Link>
                    )}
                    {!profile._id && (
                      <Link
                        to="/register"
                        className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                      >
                        Register
                      </Link>
                    )}
                    {profile._id && (
                      <Link
                        to="/profile"
                        className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                      >
                        Profile
                      </Link>
                    )}
                    {profile._id && profile.isAdmin && (
                      <Link
                        to="/admin"
                        className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                      >
                        Dashboard
                      </Link>
                    )}
                    {profile._id && (
                      <Link
                        onClick={handleLogout}
                        className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                      >
                        Logout
                      </Link>
                    )}
                  </span>
                </span>
                <User
                  className="flex cursor-pointer"
                  theme="outline"
                  size="24"
                  fill="#333"
                />
              
              </span> */}
            </div>
            <div className="flex flex-col md:flex-row   md:mt-0 lg:mt-0 pl-3 gap-x-5">
              <Link
                onClick={() => {
                  setNavState(false);
                }}
                to="/"
                className="font-normal py-8 md:py-0  border-b md:border-b-0 text-2xl md:text-lg"
              >
                {" "}
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => {
                  setNavState(false);
                }}
                className="font-normal py-8 md:py-0  border-b md:border-b-0 text-2xl md:text-lg"
              >
                {" "}
                Products
              </Link>
              <Link
                onClick={() => {
                  setNavState(false);
                }}
                className="font-normal py-8 md:py-0  border-b md:border-b-0 text-2xl md:text-lg"
              >
                My Orders
              </Link>
              <Link
                onClick={() => {
                  setNavState(false);
                }}
                className="font-normal py-8 md:py-0  border-b md:border-b-0 text-2xl md:text-lg"
              >
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
          <span className="flex relative profile_click">
            <span className="absolute top-3 right-0    flex-col py-4 px-3 w-[200px] profile_tab">
              <span className="bg-white border flex flex-col pb-4 text-base  text-black gap-y-1 rounded-md">
                {profile._id && (
                  <span
                    to="/login"
                    className="bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer rounded-t-md"
                  >
                    welcome, {profile.firstName}
                  </span>
                )}
                {!profile._id && (
                  <Link
                    to="/login"
                    className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                  >
                    Login
                  </Link>
                )}
                {!profile._id && (
                  <Link
                    to="/register"
                    className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                  >
                    Register
                  </Link>
                )}
                {profile._id && (
                  <Link
                    to="/profile"
                    className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                  >
                    Profile
                  </Link>
                )}
                {profile._id && profile.isAdmin && (
                  <Link
                    to="/admin"
                    className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                  >
                    Dashboard
                  </Link>
                )}
                {profile._id && (
                  <Link
                    onClick={handleLogout}
                    className="hover:bg-[#10B981] py-3 pl-3 hover:text-white cursor-pointer"
                  >
                    Logout
                  </Link>
                )}
              </span>
            </span>
            <User
              className="flex cursor-pointer "
              theme="outline"
              size="24"
              fill="#333"
            />
          </span>
          {/* <span>
            <Like
              className="flex cursor-pointer"
              theme="outline"
              size="24"
              fill="#333"
            />
          </span> */}
          <span className=" relative ">
            {cartItems.length > 0 && (
              <span className="cart_count font-bold text-sm text-white">
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            )}
            <MallBag
              onClick={handleCart}
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
