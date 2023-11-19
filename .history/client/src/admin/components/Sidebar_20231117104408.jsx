import React from "react";
import MetisMenu from "@metismenu/react";
// In your main component or index.js
// import "metismenu/dist/metisMenu.min.css";

import { Link, NavLink } from "react-router-dom";
const SideBar = () => {
  const content = [
    {
      icon: "icon-class-name",
      label: "Label of Item",
      to: "#a-link",
      content: [
        {
          icon: "icon-class-name",
          label: "Sub Menu of Second Item",
          to: "#another-link",
        },
        {
          icon: "icon-class-name",
          label: "Sub Menu of Second Item",
          to: "#another-link",
        },
        {
          icon: "icon-class-name",
          label: "Sub Menu of Second Item",
          to: "#another-link",
        },
      ],
    },
    {
      icon: "icon-class-name",
      label: "Second Item",
      content: [
        {
          icon: "icon-class-name",
          label: "Sub Menu of Second Item",
          to: "#another-link",
        },
        {
          icon: "icon-class-name",
          label: "Sub Menu of Second Item",
          to: "#another-link",
        },
        {
          icon: "icon-class-name",
          label: "Sub Menu of Second Item",
          to: "#another-link",
        },
      ],
    },
    {
      icon: "icon-class-name",
      label: "third Item",
      content: [
        {
          icon: "icon-class-name",
          label: "Sub Menu of Second Item",
          to: "#another-link",
        },
      ],
    },
  ];
  return (
    <div className="fixed w-screen h-screen bg-slate-300">
      <div className="flex" />
      <div className="flex">
        <MetisMenu>
          {content.map((item, index) => (
            <li key={index}>
              <NavLink to="/dashboarda" exact>
                {item.label}
              </NavLink>
              <ul>
                {item.content &&
                  item.content.map((item, index) => (
                    <li key={index}>
                      <NavLink to="/about">{item.label}</NavLink>
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
      </div>
    </div>
  );
};

export default SideBar;
