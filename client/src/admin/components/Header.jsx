import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { Alarm, ApplicationMenu, MessageOne, User } from "@icon-park/react";
import { AppStateContext } from "../../ContextApi/AppStateContext";
import { useContext } from "react";
const Header = () => {
  const { adminSideBar, setAdminSideBar } = useContext(AppStateContext);
  return (
    <div
      className={`flex fixed bg-white  right-0 top-0 py-3  px-10 border-b transition-all ease-linear ${
        adminSideBar ? "width-adjust" : "w-screen"
      }`}
    >
      <div className="flex w-full h-full  justify-between ">
        <div className="span  flex justify-center items-center">
          <div
            onClick={() => setAdminSideBar(!adminSideBar)}
            className="hamburger  "
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ul className=" flex justify-center items-center gap-x-6 my-auto  ">
            {/* <Dropdown as="li" className="nav-item dropdown my-auto flex ">
              <Dropdown.Toggle
                className=" flex justify-center flex-col  flex-wrap cursor-pointer h-[32px] w-[32px]"
                variant=""
                as="a"
              >
                <span>
                  <Alarm
                    theme="outline"
                    size="30"
                    fill="#333"
                    strokeWidth={3}
                    strokeLinejoin="bevel"
                  />
                </span>
                {/* <span className="flex justify-center h-5 w-5 text-xs items-center absolute light top-[-3px] left-[-10px] text-white bg-green-700 rounded-circle">
                  4
                </span> 
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  border: "none",
                  position: "absolute",
                  inset: "unset",
                  transform: "translate3d(0px, 84px, 0px) ",
                }}
                align="right"
                className="mt-2   w-[300px] border-none shadow-sm"
              >
                <ul className="flex w-full flex-col p-0 ">
                  <li className="flex items-center w-full gap-x-2 px-2 py-2">
                    <span className="flex w-8 h-8 rounded-full m-0 ">
                      <img
                        className="rounded-full w-full h-full"
                        src="/images/bg2.jpg"
                        alt=""
                      />
                    </span>
                    <div
                      className=" flex justify-center items-center
                    flex-col"
                    >
                      <span className="ml-1 flex justify-center text-sm font-semibold text-left text-gray-700">
                        Stock out , please kindly restock.
                      </span>
                      <span className="flex items-center w-full ">
                        <p className="py-[2px]  text-left px-2 h-fit text-[12px] rounded-xl m-0  bg-red-200 text-red-700 font-semibold">
                          stockout
                        </p>
                        <p className="mb-0 ml-3 text-xs  text-gray-600">
                          Dec 12 2023- 12:40pm
                        </p>
                      </span>
                    </div>
                  </li>
                </ul>
              </Dropdown.Menu>
            </Dropdown> */}

            <Dropdown
              as="li"
              className="nav-item dropdown  flex justify-center items-center relative"
            >
              <Dropdown.Toggle
                variant=""
                as="a"
                className=" cursor-pointer h-[32px] w-[32px] flex flex-col gap-y-2 justify-center items-center"
              >
                <span className="w-8 h-8 flex">
                  <img
                    className="rounded-full  w-full h-full "
                    src="/images/icons/6.jpg"
                    alt=""
                  />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu
                align="right"
                className="mt-3  bg-white  py-3  w-[220px] gap-y-5 shadow-sm"
                style={{
                  border: "none",
                  position: "absolute",
                  background: "white",
                  inset: "unset",
                  transform: "translate3d(0px, 84px, 0px)",
                }}
              >
                <Link
                  style={{ display: "flex" }}
                  to="/admin-profile"
                  className="dropdown-item py-2 flex items-center"
                >
                  <ApplicationMenu
                    theme="outline"
                    size="22"
                    fill="#333"
                    StrokeWidth={4}
                  />
                  <span className="ms-3">Dashboard </span>
                </Link>
                <Link
                  style={{ display: "flex" }}
                  to="/admin-profile"
                  className="dropdown-item ai-icon flex py-2 items-center "
                >
                  <User
                    theme="filled"
                    size="22"
                    fill="#333"
                    strokeWidth={3}
                    strokeLinejoin="bevel"
                  />
                  <span className="ms-3">Profile </span>
                </Link>
                <Link
                  style={{ display: "flex" }}
                  to="/email-inbox"
                  className="dropdown-item flex py-2 items-center "
                >
                  <MessageOne
                    theme="outline"
                    size="22"
                    fill="#333"
                    strokeWidth={3}
                    strokeLinejoin="bevel"
                  />
                  <span className="ms-3">Inbox </span>
                </Link>
                {/* <LogoutPage /> */}
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
