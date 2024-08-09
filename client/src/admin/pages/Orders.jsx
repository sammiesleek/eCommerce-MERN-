import { useContext, useEffect, useState } from "react";
import { NairaFormatter } from "../../utils/cartUtils";
import { AppStateContext } from "../../ContextApi/AppStateContext";
import { Avatar, Close, Delete, Editor } from "@icon-park/react";
import { formatDate } from "../../functions";
import products from "../../data/products";
import Pagination from "../../components/Pagination";
import { useGetOrdersQuery } from "../../slices/ordersApiSlice";
import Loader from "../../components/Loader";
import Print from "./Print";

const Orders = () => {
  const { adminSideBar } = useContext(AppStateContext);
  const [checkBoxes, setCheckBoxes] = useState(undefined);
  const [mainCheck, setMainCheck] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 20;
  const [filteredProduct, setFilteredProduct] = useState(products);
  const [addProduct, setAddProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);
  const [receiptData, setReceiptData] = useState(undefined);

  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;

  const paginate = (number) => {
    let page = orders?.length / perPage;
    if (number > 0 && number <= page) {
      setCurrentPage(number);
    }
  };

  const { data: orders, isLoading, error } = useGetOrdersQuery();
  if (isLoading) {
    return <Loader size="50" />;
  }
  if (error) {
    return <div className="flex mt-20">erorr</div>;
  }
  const handleReceipt = (e) => {
    const thisOrder = orders.filter((c) => c._id === e)[0];
    setReceiptData(thisOrder);
  };
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

        <div className="p-3 bg-light-bgMid mb-5 items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4  pt-10 flex ">
          <div className="flex flex-wrap w-full gap-x-4 gap-y-2">
            <div className="flex w-full md:w-[49%] lg:w-[40%]   ">
              <form className="w-full bg-black">
                <input
                  className="w-full  border-b-gray-200 border-transparent focus:border-transparent focus:border-b-[#1FA076] focus:outline-transparent focus:ring-transparent py-3"
                  type="search"
                  placeholder="search"
                />
              </form>
            </div>
            <div className="flex w-full md:w-[49%] lg:w-[24%] bg-red-100 rounded-md ml-auto">
              <select className="bg-[#f2f4f6] block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg  focus:ring-transparent focus:border-[#1FA076]">
                <option
                  className="active:bg-green-700 flex hover:bg-red-900 hover:text-red-300"
                  selected
                  disabled
                >
                  Delivered
                </option>

                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="flex w-full md:w-[49%] lg:w-[24%] bg-red-100 rounded-md">
              <select className="bg-[#f2f4f6] block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg  focus:ring-transparent focus:border-[#1FA076] ">
                <option disabled selected>
                  Paid
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
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
                      {order._id}
                    </th>
                    <td className="px-6 py-4">{formatDate(order.createdAt)}</td>
                    <td className="px-6 py-4">
                      {order.user.lastName + " " + order.user.firstName}
                    </td>
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
                        <span
                          onClick={() => handleReceipt(order._id)}
                          className="bg-red-500 cursor-pointer"
                        >
                          click
                        </span>
                        {/* <Editor
                          className="cursor-pointer"
                          theme="outline"
                          size="20"
                          fill="#333"
                          strokeWidth={3}
                        /> */}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {receiptData != undefined && (
            <div className=" absolute left-[-10000px]">
              <Print data={receiptData} />
            </div>
          )}
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
