import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";
import { ApplicationMenu } from "@icon-park/react";
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
            <Dropdown
              as="li"
              className="nav-item dropdown notification_dropdown"
            >
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
                  transform: "translate3d(0px, 84px, 0px)",
                }}
                align="right"
                className="mt-2 dropdown-menu dropdown-menu-end"
              >
                <ul className="timeline">
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img alt="images" width={50} src="/images/bg6.jpg" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-info">KG</div>
                      <div className="media-body">
                        <h6 className="mb-1">Resport created successfully</h6>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-success">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2">
                        <img alt="" width={50} src="/images/bg6.jpg" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Dr sultads Send you Photo</h6>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-danger">KG</div>
                      <div className="media-body">
                        <h6 className="mb-1">Resport created successfully</h6>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-panel">
                      <div className="media me-2 media-primary">
                        <i className="fa fa-home" />
                      </div>
                      <div className="media-body">
                        <h6 className="mb-1">Reminder : Treatment Time!</h6>
                        <small className="d-block">
                          29 July 2022 - 02:26 PM
                        </small>
                      </div>
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
                className="mt-3  bg-white  py-3  w-[250px]"
                style={{
                  position: "absolute",
                  inset: "unset",
                  transform: "translate3d(0px, 84px, 0px)",
                }}
              >
                <Link
                  style={{ display: "flex" }}
                  to="/admin-profile"
                  className="dropdown-item ai-icon flex "
                >
                  <ApplicationMenu
                    theme="outline"
                    size="22"
                    fill="#333"
                    StrokeWidth={4}
                  />
                  <span className="ms-2">Dashboard </span>
                </Link>
                <Link
                  style={{ display: "flex" }}
                  to="/admin-profile"
                  className="dropdown-item ai-icon flex "
                >
                  <svg
                    id="icon-user1"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary me-1 text-green-700"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  <span className="ms-2">Profile </span>
                </Link>
                <Link
                  style={{ display: "flex" }}
                  to="/email-inbox"
                  className="dropdown-item ai-icon"
                >
                  <svg
                    id="icon-inbox"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-success me-1"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="ms-2">Inbox </span>
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
