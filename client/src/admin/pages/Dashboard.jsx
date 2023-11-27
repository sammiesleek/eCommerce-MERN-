import { useContext } from "react";
import { AppStateContext } from "../../ContextApi/AppStateContext";
import StatCard from "../components/StatCard";
import { Buy } from "@icon-park/react";
import { NairaFormatter } from "../../utils/cartUtils";

const stats = [
  {
    title: "Today's Orders ",
    amount: "4000",
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#0d9488",
  },
  {
    title: "This Month's Sales ",
    amount: "4000",
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#fa923b",
  },
  {
    title: "Last Month's Sales  ",
    amount: "4000",
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#3b82f1",
  },
  {
    title: "All Time Sales ",
    amount: "4000",
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#039669",
  },
  {
    title: "All Time Sales ",
    amount: "4000",
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#039669",
  },
];
const statsm = [
  {
    title: "Total Order",
    count: 30,
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#0d9488",
  },
  {
    title: "Orders Pending ",
    count: 100,
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#fa923b",
  },
  {
    title: "Orders Processing ",
    count: 120,
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#3b82f1",
  },
  {
    title: "Orders Delivered",
    count: 200,
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#039669",
  },
];

const Dashboard = () => {
  const { adminSideBar, setAdminSideBar } = useContext(AppStateContext);
  return (
    <div
      className={`${
        adminSideBar ? "width-adjust " : "w-full  "
      } mt-15 pt-20  bg-light-bgHeavy `}
    >
      <div className="flex flex-col max-w-7xl   w-full mx-auto ">
        <h1 className="font-bold text-light-textPrimary  text-xl mb-5">
          Dahsboard Overview
        </h1>
        <div className="flex w-full flex-col ">
          <div className="flex flex-wrap  w-full gap-y-3 justify-between ">
            {stats.map((stat, index) => (
              <div key={index} className="flex w-full md:w-[49%] lg:w-[24%]">
                <div
                  style={{ background: stat.bg }}
                  className={`flex py-6 px-4 flex-col justify-center items-center rounded-lg  w-full `}
                >
                  {stat.icon}
                  <h5 className="text-white text-base font-semibold mt-3 ">
                    {stat.title}
                  </h5>
                  <p className="text-white text-xl font-extrabold mt-3 ">
                    {NairaFormatter.format(stat.amount)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-10  flex-wrap   justify-between">
            {statsm.map((stat, index) => (
              <div
                key={index}
                className="flex border  w-full md:w-[49%] lg:w-[24%] py-6 bg-light-bgMid rounded-lg px-4"
              >
                <span className="flex w-10  h-10 text-black text-2xl p-2 rounded-full bg-red-100">
                  {stat.icon}
                </span>
                <span>
                  <p>{stat.title}</p>
                  <p>{stat.count}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
