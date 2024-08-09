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
import { useContext, useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
  useEffect(() => {
    if (window.innerWidth < 900) {
      setAdminSideBar(false);
    }
  }, []);

  const normLink =
    "flex pl-4 no-underline gap-x-3  py-2 text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear ";
  const activeLink =
    "flex pl-4 no-underline gap-x-3  py-2 text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear nav_active ";
  const { adminSideBar, setAdminSideBar } = useContext(AppStateContext);
  const [path, setPath] = useState("home");
  // useEffect(() => {
  //   setPath(window.location.pathname);
  //   console.log("first");
  // }, [window.location.pathname]);
  const setUrl = (paths) => {
    if (!Array.isArray(paths)) {
      setPath(paths);
    }
  };
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
      to: ["/admin/products", "/admin/categories"],
      content: [
        {
          label: "- Products",
          to: "/admin/products",
        },
        {
          label: "- Categories",
          to: "/admin/categories",
        },
      ],
    },
  ];

  return (
    <div
      className={`fixed top-0  h-screen flex ${
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
            onClick={() => setUrl("home")}
            to="/admin"
            className={` flex pl-4 no-underline gap-x-3  py-2 text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear ${
              path === "home" && "nav_active"
            } `}
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
                  className={`flex  no-underline gap-x-3 pl-4  py-2 text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear  ${
                    path === "catalog" && "nav_active"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
                <ul className=" pl-10 mt-3 gap-y-3 flex flex-col ">
                  {item.content &&
                    item?.content?.map((item, index) => (
                      <li className="" key={index}>
                        <NavLink
                          onClick={() => setUrl("catalog")}
                          className="no-underline  text-[#555962] font-normal hover:text-[#10B981] transition-all ease-linear"
                          to={item.to}
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
            to="/admin/customers"
            onClick={() => setUrl("/admin/customers")}
            className={`flex  no-underline gap-x-3 pl-4 py-2  text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear  ${
              path == "/admin/customers" && "nav_active"
            }`}
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
            onClick={() => setUrl("/admin/orders")}
            to="/admin/orders"
            className={`flex  no-underline gap-x-3 pl-4 py-2  text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear  ${
              path == "/admin/orders" && "nav_active"
            }`}
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
            to="/admin/settings"
            onClick={() => setUrl("/admin/settings")}
            className={`flex  no-underline gap-x-3 pl-4 py-2  text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear  ${
              path == "/admin/settings" && "nav_active"
            }`}
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
