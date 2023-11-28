import { useContext } from "react";
import { NairaFormatter } from "../../utils/cartUtils";
import { AppStateContext } from "../../ContextApi/AppStateContext";
import { Avatar, Delete, Editor } from "@icon-park/react";

export const Products = () => {
  const { adminSideBar } = useContext(AppStateContext);
  const checkBox = document.querySelectorAll(".table-item input");
  const mainCheck = document.querySelector(".table-cont input");
  const checkbox = (type) => {
    for (let i = 0; i < checkBox.length; i++) {
      const element = checkBox[i];
      if (type === "all") {
        if (mainCheck.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          mainCheck.checked = false;
          break;
        } else {
          mainCheck.checked = true;
        }
      }
    }
  };
  return (
    <div
      className={`${
        adminSideBar ? "width-adjust " : "w-full  "
      } mt-10 pt-10  bg-light-bgHeavy `}
    >
      <div className="flex flex-col w-full max-w-7xl  mx-auto ">
        <div className="flex">
          <p className="font-bold text-light-textPrimary  text-xl mb-5">
            Products
          </p>
        </div>
        <div className="relative flex flex-col overflow-x-auto   w-full min-h-[80vh] ">
          <div className="p-3 bg-light-bgMid mb-5 items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4  pt-10 flex ">
            <div className="flex flex-wrap w-full justify-between">
              <div className="flex w-full  lg:w-[70%] ">
                <form className="w-full" action="">
                  <input
                    className="w-full  border-b-gray-200 border-transparent focus:border-transparent focus:border-b-[#1FA076] focus:outline-transparent focus:ring-transparent py-3"
                    type="text"
                    placeholder="search"
                  />
                </form>
              </div>

              <div className="flex justify-between w-full md:w-[49%] lg:w-[24%]">
                <button className="rounded-md flex w-[49%] justify-center items-center bg-[#dc2626] text-white text-base font-semibold">
                  Delete
                </button>
                <button className="rounded-md flex w-[49%] justify-center items-center bg-[#1FA076] text-white text-base font-semibold">
                  Add Product
                </button>
              </div>
            </div>
          </div>
          <div className="p-3 bg-light-bgMid mb-5 items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4  pt-10 flex ">
            <div className="flex flex-wrap w-full justify-between">
              <div className="flex w-full md:w-[49%] lg:w-[24%] bg-red-100 rounded-md">
                <select className="bg-[#f2f4f6] block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg  focus:ring-transparent focus:border-[#1FA076]">
                  <option
                    className="active:bg-green-700 flex hover:bg-red-900 hover:text-red-300"
                    selected
                  >
                    Category
                  </option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="flex w-full md:w-[49%] lg:w-[24%] bg-red-100 rounded-md">
                <select className="bg-[#f2f4f6] block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg  focus:ring-transparent focus:border-[#1FA076] ">
                  <option selected>Price</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="flex w-full md:w-[49%] lg:w-[24%] bg-red-100 rounded-md">
                <select className="bg-[#f2f4f6] block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg  focus:ring-transparent focus:border-[#1FA076]  ">
                  <option selected>Status</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>

              <div className="flex justify-between w-full md:w-[49%] lg:w-[24%]">
                <button className="rounded-md flex w-[49%] justify-center items-center bg-[#1FA076] text-white text-base font-semibold">
                  Refresh
                </button>
                <button className="rounded-md flex w-[49%] justify-center items-center bg-gray-400 text-white text-base font-semibold">
                  Refresh
                </button>
              </div>
            </div>
          </div>

          <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-light-bgMid rounded border">
            <thead className="text-xs rounded-lg text-gray-700 uppercase bg-[#F2F4F6]  ">
              <tr className="">
                <th scope="col" className="p-4">
                  <div className="flex items-center table-cont">
                    <input
                      onClick={() => checkbox("all")}
                      id="checkbox-all-search"
                      type="checkbox"
                      className="input w-[15px] h-[15px]   border-[#1FA076] checked:bg-[#1FA076] focus:ring-transparent cursor-pointer "
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  PRODUCT NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  CATEGORY
                </th>
                <th scope="col" className="px-6 py-3">
                  PRICE
                </th>
                <th scope="col" className="px-6 py-3">
                  iN STOCK
                </th>
                <th scope="col" className="px-6 py-3">
                  STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                  PUBLISHED
                </th>
                <th scope="col" className="px-6 py-3">
                  VIEW
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b   hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center table-item">
                    <input
                      onClick={() => checkbox()}
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="input w-[15px] h-[15px]  border-[#1FA076] checked:bg-[#1FA076] focus:ring-transparent  cursor-pointer "
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <div className="ps-3 flex">
                    <Avatar />

                    <p className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                </th>
                <td className="px-6 py-4">React Developer</td>
                <td className="px-6 py-4">{NairaFormatter.format(300)}</td>
                <td className="px-6 py-4">400</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="px-6 py-4"> yes</td>
                <td className="px-6 py-4"> VIEW</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit user
                  </a>
                </td>
              </tr>
              <tr className="bg-white border-b   hover:bg-gray-50 ">
                <td className="w-4 p-4">
                  <div className="flex items-center table-item">
                    <input
                      id="checkbox-table-search-1"
                      type="checkbox"
                      className="input w-[15px] h-[15px]  border-[#1FA076] checked:bg-[#1FA076] focus:ring-transparent  cursor-pointer "
                      onClick={() => checkbox()}
                    />
                    <label
                      htmlFor="checkbox-table-search-1"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <div className="ps-3 flex">
                    <Avatar />

                    <p className="font-normal text-gray-500">
                      neil.sims@flowbite.com
                    </p>
                  </div>
                </th>
                <td className="px-6 py-4">React Developer</td>
                <td className="px-6 py-4">{NairaFormatter.format(300)}</td>
                <td className="px-6 py-4">400</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                    Online
                  </div>
                </td>
                <td className="px-6 py-4">
                  <label className="relative inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-11 h-6 bg-red-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-transparent  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-yellow-700 peer-checked:bg-green-900"></div>
                  </label>
                </td>
                <td className="px-6 py-4"> VIEW</td>
                <td className="px-6 py-4">
                  <span>
                    <Editor
                      theme="outline"
                      size="24"
                      fill="#333"
                      strokeWidth={3}
                    />
                    <Delete
                      theme="outline"
                      size="24"
                      fill="#333"
                      strokeWidth={3}
                    />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <nav
            className="mt-auto flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1000
              </span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
