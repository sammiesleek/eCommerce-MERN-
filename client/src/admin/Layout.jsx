import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Outlet } from "react";

const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />
    </>
  );
};

export default Layout;
