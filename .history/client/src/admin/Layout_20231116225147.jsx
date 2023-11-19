import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Outlet } from "react";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <Outlet /> */}
      <SideBar />
    </>
  );
};

export default Layout;
