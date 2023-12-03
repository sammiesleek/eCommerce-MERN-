import { useContext } from "react";
import { AppStateContext } from "../../ContextApi/AppStateContext";

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
    bg: "#0791b2",
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
    bg: "#ffedd5",
    color: "#ee7839",
  },
  {
    title: "Orders Pending ",
    count: 100,
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#daeafe",
    color: "#2b66eb",
  },
  {
    title: "Orders Processing ",
    count: 120,
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#cbfbf1",
    color: "#0e9488",
  },
  {
    title: "Orders Delivered",
    count: 200,
    icon: <Buy theme="outline" strokeWidth={3} />,
    bg: "#d1fae5",
    color: "#1fa076",
  },
];

const Dashboard = () => {
  const { adminSideBar } = useContext(AppStateContext);
  return (
    <div
      className={`${
        adminSideBar ? "width-adjust " : "w-full  "
      } mt-15 pt-20  bg-light-bgHeavy px-4`}
    >
      <div className="flex flex-col max-w-7xl   w-full mx-auto ">
        <h1 className="font-bold text-light-textPrimary  text-xl mb-5">
          Dahsboard Overview
        </h1>
        <div className="flex w-full flex-col ">
          <div className="flex flex-wrap  w-full gap-y-3 justify-between ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex w-full md:w-[49%] lg:w-[24%] xl:w-[19%]"
              >
                <div
                  style={{ background: stat.bg }}
                  className={`flex py-10 px-4 flex-col justify-center items-center rounded-lg  w-full `}
                >
                  <span className="text-3xl text-white">{stat.icon}</span>
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
                className="flex items-center gap-x-5 border  w-full md:w-[49%] lg:w-[24%] py-4 bg-light-bgMid rounded-lg px-4"
              >
                <span
                  style={{ background: stat.bg, color: stat.color }}
                  className="flex w-14   justify-center items-center h-14 text-black text-2xl p-2 rounded-full bg-red-100"
                >
                  {stat.icon}
                </span>
                <span>
                  <p className="text-gray-600 text-lg ">{stat.title}</p>
                  <p className="font-extrabold text-2xl text-light-textPrimary">
                    {stat.count}
                  </p>
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
