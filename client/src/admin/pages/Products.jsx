import { useContext, useEffect, useState } from "react";
import { NairaFormatter } from "../../utils/cartUtils";
import { AppStateContext } from "../../ContextApi/AppStateContext";
import { Avatar, Close, Delete, Editor } from "@icon-park/react";
import products from "../../data/products";
import Pagination from "../../components/Pagination";

export const Products = () => {
  const { adminSideBar } = useContext(AppStateContext);
  const [checkBoxes, setCheckBoxes] = useState(undefined);
  const [mainCheck, setMainCheck] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;
  const [filteredProduct, setFilteredProduct] = useState(products);

  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;

  const paginate = (number) => {
    let page = filteredProduct.length / perPage;
    console.log(page);
    if (number > 0 && number <= page) {
      setCurrentPage(number);
    }
  };
  {
    /* <input type="file" accept="image/*"  onchange="showMyImage(this)" />
 <br/>
<img id="thumbnil" style="width:20%; margin-top:10px;"  src="" alt="image"/> */
  }

  function showMyImage(fileInput) {
    var files = fileInput.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var imageType = /image.*/;
      if (!file.type.match(imageType)) {
        continue;
      }
      var img = document.getElementById("thumbnil");
      img.file = file;
      var reader = new FileReader();
      reader.onload = (function (aImg) {
        return function (e) {
          aImg.src = e.target.result;
        };
      })(img);
      reader.readAsDataURL(file);
    }
  }

  useEffect(() => {
    setCheckBoxes(document.querySelectorAll(".table-item input"));
    setMainCheck(document.querySelector(".table-cont input"));
  }, [filteredProduct]);

  const checkbox = (type) => {
    for (let i = 0; i < checkBoxes.length; i++) {
      const element = checkBoxes[i];
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

  const batchDelete = () => {
    if (mainCheck.checked === true) {
      setFilteredProduct([]);
    } else {
      const deleteIds = [];
      checkBoxes.forEach((box) => {
        if (box.checked === true) {
          deleteIds.push(box.getAttribute("id"));
        }
      });

      const res = filteredProduct.filter((x) => !deleteIds.includes(x._id));
      setFilteredProduct(res);
      checkBoxes.forEach((x) => {
        x.checked = false;
      });
    }
    mainCheck.checked = false;
    setCurrentPage(0);
  };

  const deleteProduct = (id) => {
    const res = filteredProduct.filter((x) => x._id !== id);
    setFilteredProduct(res);
  };
  return (
    <div
      className={`${
        adminSideBar ? "width-adjust " : "w-full  "
      } mt-10 pt-10  bg-light-bgHeavy px-2`}
    >
      {/* add product modal starts here  */}
      <div className="flex flex-col product_modal fixed top-0 right-0 h-screen shadow-2xl bg-light-bgMid  w-full md:w-80% lg:w-[800px] z-50">
        <div className="flex bg-light-bgHeavy  w-full justify-between p-5 h-fit">
          <span className="flex flex-col">
            <p className="font-semibold text-xl text-light-textPrimary">
              Add Product
            </p>
            <p className="font-normal text-sm text-light-textPrimary">
              Add Product and neccessary informations here
            </p>
          </span>
          <span className="flex rounded-full bg-white h-10 justify-center items-center w-10 shadow-sm hover:rotate-[180deg] transition-all ease-linear">
            <Close
              className="cursor-pointer text-light-textPrimary"
              theme="outline"
              size="20"
              strokeWidth={7}
            />
          </span>
        </div>
        <div className="flex w-full bg-red-400 h-full overflow-x-scroll">
          <div className="flex">
            <form action="">
              <div className="flex">
                <input type="text" placeholder="Product Name/ Tit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-7xl  mx-auto pb-20">
        <div className="flex">
          <p className="font-bold text-light-textPrimary  text-xl mb-5">
            Products
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
                <th scope="col" className="p-4">
                  <div className="flex items-center table-cont">
                    <input
                      onClick={() => checkbox("all")}
                      id="checkbox-all-search"
                      type="checkbox"
                      className="input w-[15px] h-[15px]   border-[#1FA076] rounded-sm checked:bg-[#1FA076] focus:ring-transparent cursor-pointer "
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
              {filteredProduct
                ?.slice(indexOfFirstData, indexOfLastData)
                .map((product, index) => (
                  <tr
                    key={index}
                    className="bg-white  border-b   hover:bg-gray-50 "
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center table-item">
                        <input
                          id={product._id}
                          type="checkbox"
                          className="input w-[15px] h-[15px]  border-[#1FA076] rounded-sm checked:bg-[#1FA076] focus:ring-transparent  cursor-pointer "
                          onClick={() => checkbox()}
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        ></label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className=" px-6 py-4 text-gray-900 whitespace-nowrap  "
                    >
                      <div className="ps-3 flex gap-x-4 items-center">
                        <img
                          className="w-[30px] h-[30px]"
                          src={product.image}
                          alt=""
                        />

                        <p className="font-normal mb-0 text-gray-500">
                          {product.name}
                        </p>
                      </div>
                    </th>
                    <td className="px-6 py-4">React Developer</td>
                    <td className="px-6 py-4">
                      {NairaFormatter.format(product.price)}
                    </td>
                    <td className="px-6 py-4">{product.countInStock}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                        Online
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <label className="relative inline-flex items-center me-5 cursor-pointer">
                        <input
                          type="checkbox"
                          value=""
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-red-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-transparent  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-yellow-700 peer-checked:bg-green-900"></div>
                      </label>
                    </td>
                    <td className="px-6 py-4"> VIEW</td>
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
                          onClick={() => deleteProduct(product._id)}
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
              totalData={filteredProduct.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          }
          <div
            id="deletemany-modal"
            tabIndex="-1"
            className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="deletemany-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                  <svg
                    className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to delete this product?
                  </h3>
                  <button
                    data-modal-hide="deletemany-modal"
                    onClick={() => batchDelete()}
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                  >
                    Yes, Im sure
                  </button>
                  <button
                    data-modal-hide="deletemany-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
