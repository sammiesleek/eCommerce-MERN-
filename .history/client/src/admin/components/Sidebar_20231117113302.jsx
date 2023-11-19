import { AdProduct, ApplicationMenu, Peoples } from "@icon-park/react";
import MetisMenu from "@metismenu/react";
import "metismenujs/style";

import { Link, NavLink } from "react-router-dom";
const SideBar = () => {
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
  return (
    <div className="fixed w-screen h-screen flex ">
      <div className="flex" />
      <div className="flex w-[300px] flex-col border-r bg-white">
        <div className="flex pl-4 h-[74px] border-b items-center ">
          <span className="font-bold text-3xl">WizzBee</span>
        </div>
        <div className="flex flex-col w-full h-full pt-4">
          <NavLink
            to="/admin"
            className="flex pl-4 no-underline gap-x-3 py-3 text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear"
          >
            <ApplicationMenu
              theme="outline"
              size="24"
              strokeWidth={3}
              strokeLinejoin="bevel"
            />
            <span>Dashboard</span>
          </NavLink>
          <MetisMenu toggle={false} className="pl-0">
            {content.map((item, index) => (
              <li key={index}>
                <NavLink className="flex  no-underline gap-x-3 py-2 pl-4  text-[#555962] font-semibold hover:text-[#10B981] transition-all ease-linear">
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
                <ul>
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

            {/* <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <Link to="#" className="has-arrow">
            Other Pages
          </Link>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <Link to="#" className="has-arrow">
            External Pages
          </Link>
          <ul>
            <li>
              <a
                href="https://github.com/onokumus/metismenujs"
                target="_blank"
                rel="noopener noreferrer"
              >
                metismenujs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/onokumus/metismenu"
                target="_blank"
                rel="noopener noreferrer"
              >
                metismenu jquery
              </a>
            </li>
          </ul>
        </li> */}
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
        </div>
      </div>
    </div>
  );
};

export default SideBar;
