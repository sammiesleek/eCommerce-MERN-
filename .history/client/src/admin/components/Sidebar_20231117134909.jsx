import {
  AdProduct,
  ApplicationMenu,
  FolderSettings,
  ListCheckbox,
  Logout,
  Peoples,
} from "@icon-park/react";
import MetisMenu from "@metismenu/react";
import "metismenujs/style";
import { AppStateContext } from "../../ContextApi/AppStateContext";
import { useContext, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  useEffect(() => {
    window.clientWidth;
  }, []);

  const { adminSideBar, setAdminSideBar } = useContext(AppStateContext);
  console.log(adminSideBar);
  const content = [
    {
      icon: (
        <AdProduct
          theme="outline"
          size="24"
          strokeWidth={3}
          strokeLinejoin="bevel"
        />
      ),
      label: "Catalog",
      content: [
        {
          label: "- Products",
          to: "/products",
        },
        {
          label: "- Categories",
          to: "/categories",
        },
      ],
    },
  ];

  let path = window.location.pathname;
  // path = path.split("/");
  console.log(path);
  return (
    <div
      className={`fixed  h-screen flex ${
        adminSideBar ? "left-0" : "left-[-10000px]"
      } transition-all ease-linear   `}
    >
      <div className="flex w-[200px] flex-col border-r bg-white relative z-20">
        <Link
          to="/"
          className="flex pl-4 h-[66px] border-b no-underline items-center "
        >
          <span className="font-bold text-[#10B981] text-3xl">WizzBee</span>
        </Link>
        <div className="flex flex-col w-full  gap-y-5 pt-4">
          <NavLink
            to="/admin"
            className={`flex pl-4 no-underline gap-x-3 py-2 text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear ${
              path === "/admin" ? "nav_active" : ""
            }`}
          >
            <ApplicationMenu
              theme="outline"
              size="24"
              strokeWidth={3}
              strokeLinejoin="bevel"
            />
            <span>Dashboard</span>
          </NavLink>
          <MetisMenu toggle={false} className="pl-0 mb-0">
            {content.map((item, index) => (
              <li key={index} className="flex flex-col ">
                <NavLink
                  to=""
                  className="flex  no-underline gap-x-3 pl-4  text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
                <ul className="  mt-3 gap-y-3 flex flex-col ">
                  {item.content &&
                    item.content.map((item, index) => (
                      <li key={index}>
                        <NavLink
                          className="no-underline  text-[#555962] font-normal hover:text-[#10B981] transition-all ease-linear"
                          to="/about"
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </MetisMenu>
          <NavLink
            to="/admin"
            className="flex pl-4 no-underline gap-x-3  text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear"
          >
            <Peoples
              theme="outline"
              size="24"
              strokeWidth={3}
              strokeLinejoin="bevel"
            />
            <span>Customers</span>
          </NavLink>
          <NavLink
            to="/admin"
            className="flex pl-4 no-underline gap-x-3  py-2 text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear"
          >
            <ListCheckbox
              theme="outline"
              size="24"
              strokeWidth={3}
              strokeLinejoin="bevel"
            />
            <span>Orders</span>
          </NavLink>
          <NavLink
            to="/admin"
            className="flex pl-4 no-underline gap-x-3   text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear"
          >
            <FolderSettings
              theme="outline"
              size="24"
              strokeWidth={3}
              strokeLinejoin="bevel"
            />
            <span>Settings</span>
          </NavLink>
        </div>
        <span className="mt-auto flex gap-x-2 justify-center w-[80%] mx-auto mb-4 items-center font-semibold text-white bg-[#10B981]  py-[12px] rounded-md cursor-pointer hover:bg-[#555962] transition-all ease-linear ">
          <Logout
            theme="outline"
            size="18"
            strokeWidth={5}
            strokeLinejoin="bevel"
          />
          <p className="mb-0">Logout</p>
        </span>
      </div>
    </div>
  );
};

export default SideBar;
