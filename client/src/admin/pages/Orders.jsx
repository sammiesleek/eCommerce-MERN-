import { useContext, useEffect, useState } from "react";
import { NairaFormatter } from "../../utils/cartUtils";
import { AppStateContext } from "../../ContextApi/AppStateContext";
import { Avatar, Close, Delete, Editor } from "@icon-park/react";
import { formatDate } from "../../functions";
import products from "../../data/products";
import Pagination from "../../components/Pagination";
import { useGetOrdersQuery } from "../../slices/ordersApiSlice";
import Loader from "../../components/Loader";
const Orders = () => {
  const { adminSideBar } = useContext(AppStateContext);
  const [checkBoxes, setCheckBoxes] = useState(undefined);
  const [mainCheck, setMainCheck] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 15;
  const [filteredProduct, setFilteredProduct] = useState(products);
  const [addProduct, setAddProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);

  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;

  const paginate = (number) => {
    let page = orders?.length / perPage;
    console.log(page);
    if (number > 0 && number <= page) {
      setCurrentPage(number);
    }
  };

  const { data: orders, isLoading, error } = useGetOrdersQuery();
  console.log(orders);
  console.log(error);
  if (isLoading) {
    return <Loader size="50" />;
  }
  if (error) {
    return <div className="flex mt-20">erorr</div>;
  }
  return (
    <div
      className={`${
        adminSideBar ? "width-adjust " : "w-full  "
      } mt-10 pt-10  bg-light-bgHeavy px-2`}
    >
      <div className="flex flex-col w-full max-w-7xl  mx-auto pb-20">
        <div className="flex">
          <p className="font-bold text-light-textPrimary  text-xl mb-5">
            Orders
          </p>
        </div>
        <div className="p-3 bg-light-bgMid mb-5 items-center justify-between flex-column flex-wrap md:flex-row space-y-4  flex ">
          <div className="flex flex-wrap w-full justify-between gap-y-4">
            <div className="flex w-full  lg:w-[70%] ">
              <form className="w-full bg-black">
                <input
                  className="w-full  border-b-gray-200 border-transparent focus:border-transparent focus:border-b-[#1FA076] focus:outline-transparent focus:ring-transparent py-3"
                  type="text"
                  placeholder="search"
                />
              </form>
            </div>

            <div className="flex justify-between w-full md:w-[49%] lg:w-[24%]">
              <button
                data-modal-target="deletemany-modal"
                data-modal-toggle="deletemany-modal"
                className="rounded-md py-3 flex w-[49%] justify-center items-center bg-[#e04949] text-white text-base font-semibold"
              >
                Delete
              </button>
              <button className="rounded-md py-3 flex w-[49%] justify-center items-center bg-[#1FA076] text-white text-base font-semibold">
                Add Product
              </button>
            </div>
          </div>
        </div>
        <div className="p-3 bg-light-bgMid mb-5 items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4  pt-10 flex ">
          <div className="flex flex-wrap w-full justify-between gap-y-4">
            <div className="flex w-full md:w-[49%] lg:w-[24%] bg-red-100 rounded-md ">
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
              <button className="rounded-md py-3 flex w-[49%] justify-center items-center bg-[#1FA076] text-white text-base font-semibold">
                Refresh
              </button>
              <button className="rounded-md py-3 flex w-[49%] justify-center items-center bg-gray-400 text-white text-base font-semibold">
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col overflow-x-auto   w-full  ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-light-bgMid rounded border">
            <thead className="text-xs rounded-lg text-gray-700 uppercase bg-[#F2F4F6]  ">
              <tr className="">
                <th scope="col" className="px-6 py-3">
                  INVOICE NO
                </th>
                <th scope="col" className="px-6 py-3">
                  ORDER TIME
                </th>
                <th scope="col" className="px-6 py-3">
                  CUSTOMER NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  METHOD
                </th>
                <th scope="col" className="px-6 py-3">
                  AMOUNT
                </th>
                <th scope="col" className="px-6 py-3">
                  STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTIONS
                </th>
                <th scope="col" className="px-6 py-3">
                  INVOICE
                </th>
              </tr>
            </thead>
            <tbody>
              {orders
                ?.slice(indexOfFirstData, indexOfLastData)
                .map((order, index) => (
                  <tr
                    key={index}
                    className="bg-white  border-b   hover:bg-gray-50 "
                  >
                    <th
                      scope="row"
                      className=" px-6 py-4 text-gray-900 whitespace-nowrap  "
                    >
                      UUEYEW7477
                    </th>
                    <td className="px-6 py-4">{formatDate(order.createdAt)}</td>
                    <td className="px-6 py-4">
                      {order.user.lastName + " " + order.user.firstName}
                    </td>
                    <td className="px-6 py-4">{order.countInStock}</td>
                    <td className="px-6 py-4">
                      {NairaFormatter.format(order.totalPrice)}
                    </td>
                    <td className="px-6 py-4">Pending</td>
                    <td className="px-6 py-4">
                      <div className="flex w-full bg-red-100 rounded-md">
                        <select className="bg-[#f2f4f6] block w-full px-4 py-1 text-base text-gray-900 border border-gray-300 rounded-lg  focus:ring-transparent focus:border-[#1FA076] ">
                          <option>Price</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="flex gap-x-3 ">
                        <Editor
                          className="cursor-pointer"
                          theme="outline"
                          size="20"
                          fill="#333"
                          strokeWidth={3}
                        />
                        <Delete
                          className="text-red-600 cursor-pointer"
                          theme="outline"
                          size="20"
                          strokeWidth={3}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {
            <Pagination
              perPage={perPage}
              totalData={orders?.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          }
        </div>
      </div>
    </div>
  );
};
export default Orders;
