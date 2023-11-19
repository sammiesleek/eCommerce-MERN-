import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Outlet } from "react";

const Admin = () => {
  return (
    <>
      <Header />
      <Outlet />
      <SideBar />
    </>
  );
};

export default Admin;
