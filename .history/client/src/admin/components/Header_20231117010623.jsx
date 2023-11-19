import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { ApplicationMenu, MessageOne, User } from "@icon-park/react";
const Header = () => {
  return (
    <div className="flex fixed left-0 right-0 top-0   px-10 border-b">
      <div className="flex w-full h-full  justify-between ">
        <div className="span  flex justify-center items-center">
          <div className="hamburger  ">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <div className="">
          <ul className=" flex justify-center items-center gap-x-6 h-full ">
            <Dropdown as="li" className="nav-item dropdown ">
              <Dropdown.Toggle
                className="nav-link i-false c-pointer"
                variant=""
                as="a"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.375"
                  height="24"
                  viewBox="0 0 19.375 24"
                >
                  <g
                    id="_006-notification"
                    data-name="006-notification"
                    transform="translate(-341.252 -61.547)"
                  >
                    <path
                      id="Path_1954"
                      data-name="Path 1954"
                      d="M349.741,65.233V62.747a1.2,1.2,0,1,1,2.4,0v2.486a8.4,8.4,0,0,1,7.2,8.314v4.517l.971,1.942a3,3,0,0,1-2.683,4.342h-5.488a1.2,1.2,0,1,1-2.4,0h-5.488a3,3,0,0,1-2.683-4.342l.971-1.942V73.547a8.4,8.4,0,0,1,7.2-8.314Zm1.2,2.314a6,6,0,0,0-6,6v4.8a1.208,1.208,0,0,1-.127.536l-1.1,2.195a.6.6,0,0,0,.538.869h13.375a.6.6,0,0,0,.536-.869l-1.1-2.195a1.206,1.206,0,0,1-.126-.536v-4.8a6,6,0,0,0-6-6Z"
                      transform="translate(0 0)"
                      fill="#135846"
                      fill-rule="evenodd"
                    />
                  </g>
                </svg>

                <span className="flex justify-center h-6 w-6 items-center absolute light top-0 text-white bg-primary rounded-circle">
                  4
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  position: "absolute",
                  inset: "unset",
                  transform: "translate3d(0px, 84px, 0px) ",
                }}
                align="right"
                className="mt-2  w-[300px]"
              >
                <ul className="">
                  <li className="flex justify-center">
                    <span className="flex w-8 h-8 rounded-full bg-red-200 text-red-700">
                      <img
                        className="rounded-full w-full h-full"
                        src="/images/bg2.jpg"
                        alt=""
                      />
                    </span>
                    <div className="timeline-panel">
                      <span>Stock out , please kind restock.</span>
                      <span className="flex items-center">
                        <p className="py-1 px-2 h-fit text-xs rounded-sm flex m-0 justify-center items-center bg-red-400 w-fit">
                          stockout
                        </p>
                        <p className="m-0">Dec 12 2023- 12:40pm</p>
                      </span>
                    </div>
                  </li>
                </ul>
                <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                  <div
                    className="ps__thumb-x"
                    tabIndex={0}
                    style={{ left: 0, width: 0 }}
                  />
                </div>
                <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                  <div
                    className="ps__thumb-y"
                    tabIndex={0}
                    style={{ top: 0, height: 0 }}
                  />
                </div>
                <Link className="all-notification" to="#">
                  See all notifications <i className="ti-arrow-right" />
                </Link>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown
              as="li"
              className="nav-item dropdown  flex justify-center items-center relative"
            >
              <Dropdown.Toggle
                variant=""
                as="a"
                className=" cursor-pointer flex flex-col gap-y-2 justify-center items-center"
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
                className="mt-3  bg-white  py-3  w-[220px] gap-y-5"
                style={{
                  position: "absolute",
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
