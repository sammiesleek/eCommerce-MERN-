import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../ContextApi/AppStateContext";
import { NairaFormatter } from "../../utils/cartUtils";
import { Avatar, Close, Delete, Editor } from "@icon-park/react";
import products from "../../data/products";
import Pagination from "../../components/Pagination";

import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
} from "../../slices/productsApiSlice";
import Loader from "../../components/Loader";
import { uploadfiles } from "../../utils/FilesUpload";
import { toast } from "react-toastify";
import { StatusAlertService } from "react-status-alert";
export const Categories = () => {
  const { adminSideBar, profile } = useContext(AppStateContext);
  const {
    data: categories,
    isLoading,
    error,
    refetch: refetchCat,
  } = useGetCategoriesQuery();
  const [checkBoxes, setCheckBoxes] = useState(undefined);
  const [mainCheck, setMainCheck] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [catImages, setCatImages] = useState();
  const [deleteModal, setDeleteModal] = useState(false);
  const perPage = 20;
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [addCategory, setAddCategory] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const indexOfLastData = currentPage * perPage;
  const indexOfFirstData = indexOfLastData - perPage;
  const [submittingCat, setSubmittingCat] = useState(false);
  const [createCategory, { isLoading: isfetching, error: iserror }] =
    useCreateCategoryMutation();
  const [updateCategory, { isLoading: isupdating, error: iserr }] =
    useUpdateCategoryMutation();
  const [deleteCategory, { isLoading: isdeleteing }] =
    useDeleteCategoryMutation();
  const [deleteId, setDeleteId] = useState(undefined);
  const [editForm, setEditForm] = useState({
    name: "",
    desc: "",
    id: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    images: "",
    user: undefined,
  });
  const deleteCatgory = async () => {
    const res = await deleteCategory(deleteId);
    if (res) {
      refetchCat();
      setDeleteModal(false);
    }
  };

  const populateEditForm = (e) => {
    setEditCategory(true);

    const category = categories.filter((category) => category._id === e.id)[0];

    editForm.name = category.name;
    editForm.desc = category.desc;
    editForm.id = category._id;
  };

  const addImageToPost = ({ files }) => {
    if (files.length > 10) {
      console.log("Please upload maximum of 10 files");
      return;
    }
    let updatedGallary = [];
    for (let i = 0; i < files.length; i++) {
      const newImage = files[i];
      newImage["id"] = Math.random();

      if (
        !files[i].name.match(/\.(jpg|jpeg|png|gif|webp)$/) ||
        files[i].size > 5000000
      ) {
        console.log("Image File not Supported, Please ReUpload");
      } else {
        // setError(null);
        updatedGallary.push(newImage);
      }
    }

    setCatImages(updatedGallary);
  };

  const updateForm = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const updateEditForm = (e) => {
    setEditForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // submit category form
  const subMitForm = async (e) => {
    setSubmittingCat(true);
    // StatusAlertService.showError("hii");
    e.preventDefault();

    try {
      const uploadedImages = await uploadfiles("products", "images", catImages);
      if (!uploadedImages) {
        setSubmittingCat(false);
        return;
      }
      const updatedFormData = {
        ...formData,
        images: JSON.stringify(uploadedImages),
        user: profile._id,
      };
      const res = await createCategory(updatedFormData).unwrap();
      refetchCat();
      setSubmittingCat(false);
      setAddCategory(false);
      toast.error("error");
    } catch (error) {
      setSubmittingCat(false);
    }
  };

  const paginate = (number) => {
    let page = filteredCategories.length / perPage;
    if (number > 0 && number <= page) {
      setCurrentPage(number);
    }
  };

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  // update category
  const editCat = async (e, data = undefined) => {
    if (data) {
      e.preventDefault();
      const res = await updateCategory(data).unwrap();

      if (res) {
        setEditCategory(false);
        refetchCat();
      }
    } else {
      const data = {
        id: e.id,
        published: e.value,
      };
      try {
        const res = await updateCategory(data).unwrap();

        if (res) {
          refetchCat();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
  }, [filteredCategories]);

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
      setFilteredCategories([]);
    } else {
      const deleteIds = [];
      checkBoxes.forEach((box) => {
        if (box.checked === true) {
          deleteIds.push(box.getAttribute("id"));
        }
      });

      const res = filteredCategories.filter((x) => !deleteIds.includes(x._id));
      setFilteredCategories(res);
      checkBoxes.forEach((x) => {
        x.checked = false;
      });
    }
    mainCheck.checked = false;
    setCurrentPage(0);
  };

  const deleteProduct = (id) => {
    const res = filteredCategories.filter((x) => x._id !== id);

    setFilteredCategories(res);
  };
  return (
    <div
      className={`${
        adminSideBar ? "width-adjust " : "w-full  "
      } mt-10 pt-10  bg-light-bgHeavy px-2`}
    >
      {/* add category modal starts here  */}
      <div
        className={`flex flex-col product_modal fixed top-0 ${
          addCategory ? "right-0" : "right-[-200%]"
        }  h-screen shadow-2xl bg-light-bgMid  w-full md:w-80% lg:w-[800px] z-50 transition-all ease-in-out `}
      >
        <div className="flex bg-light-bgHeavy  w-full justify-between p-5 h-fit">
          <span className="flex flex-col">
            <p className="font-semibold text-xl text-light-textPrimary">
              Add Category
            </p>
          </span>
          <span
            onClick={() => setAddCategory(false)}
            className="flex rounded-full bg-white h-10 justify-center items-center w-10 shadow-sm hover:rotate-[180deg] transition-all ease-linear"
          >
            <Close
              className="cursor-pointer text-light-textPrimary"
              theme="outline"
              size="20"
              strokeWidth={7}
            />
          </span>
        </div>
        <div className="flex w-full h-full overflow-x-scroll pt-5">
          <div className="flex w-full px-5">
            <form action="" className="flex flex-col w-full gap-y-5">
              <div className="flex w-full  ">
                <p className=" hidden sm:block text-light-textPrimary text-base font-semibold">
                  Category&apos;s Title
                </p>
                <input
                  className="w-[70%] ml-auto   rounded-md border-gray-500 border py-3 focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-red-900"
                  type="text"
                  placeholder="Category's Title"
                  value={formData.name}
                  onChange={(e) => updateForm(e)}
                  name="name"
                />
              </div>

              <div className="flex">
                <p className=" hidden sm:block text-light-textPrimary text-base font-semibold">
                  {" "}
                  Category&apos;s Description
                </p>
                <textarea
                  className="w-[70%] ml-auto p-4  rounded-md  border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-red-900"
                  placeholder="Category's Description"
                  rows={5}
                  value={formData.desc}
                  onChange={(e) => updateForm(e)}
                  name="desc"
                />
              </div>

              <div className="flex items-center justify-center w-full relative">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100 "
                >
                  <div className="flex flex-col items-center   justify-center pt-2 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    type="file"
                    className="absolute flex w-full h-full opacity-0"
                    onChange={(e) => addImageToPost(e.target)}
                  />
                </label>
              </div>
              <div className="flex justify-end">
                {submittingCat ? (
                  <Loader size="40" />
                ) : (
                  <input
                    className="bg-[#1FA076] px-10 py-3 font-bold text-lg  text-white rounded-sm cursor-pointer hover:bg-gray-800"
                    type="submit"
                    value="Submit"
                    onClick={(e) => subMitForm(e)}
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* edit category modal  */}
      <div
        className={`flex flex-col product_modal fixed top-0 ${
          editCategory ? "right-0" : "right-[-200%]"
        }  h-screen shadow-2xl bg-light-bgMid  w-full md:w-80% lg:w-[800px] z-50 transition-all ease-in-out `}
      >
        <div className="flex bg-light-bgHeavy  w-full justify-between p-5 h-fit">
          <span className="flex flex-col">
            <p className="font-semibold text-xl text-light-textPrimary">
              Edit Category
            </p>
          </span>
          <span
            onClick={() => setEditCategory(false)}
            className="flex rounded-full bg-white h-10 justify-center items-center w-10 shadow-sm hover:rotate-[180deg] transition-all ease-linear"
          >
            <Close
              className="cursor-pointer text-light-textPrimary"
              theme="outline"
              size="20"
              strokeWidth={7}
            />
          </span>
        </div>
        <div className="flex w-full h-full overflow-x-scroll pt-5">
          <div className="flex w-full px-5">
            <form
              onSubmit={(e) => editCat(e, editForm)}
              action=""
              className="flex flex-col w-full gap-y-5"
            >
              <div className="flex w-full  ">
                <p className=" hidden sm:block text-light-textPrimary text-base font-semibold">
                  Category&apos;s Title
                </p>
                <input
                  className="w-[70%] ml-auto   rounded-md border-gray-500 border py-3 focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-red-900"
                  type="text"
                  placeholder="Category's Title"
                  value={editForm.name}
                  name="name"
                  onChange={(e) => updateEditForm(e)}
                />
              </div>

              <div className="flex">
                <p className=" hidden sm:block text-light-textPrimary text-base font-semibold">
                  {" "}
                  Category&apos;s Description
                </p>
                <textarea
                  className="w-[70%] ml-auto p-4  rounded-md  border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-red-900"
                  placeholder="Category's Description"
                  rows={5}
                  value={editForm.desc}
                  name="desc"
                  onChange={(e) => updateEditForm(e)}
                />
              </div>

              <div className="flex items-center justify-center w-full relative">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100 "
                >
                  <div className="flex flex-col items-center   justify-center pt-2 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    type="file"
                    className="absolute flex w-full h-full opacity-0"
                  />
                </label>
              </div>
              <div className="flex justify-end">
                <input
                  className="bg-[#1FA076] px-10 py-3 font-bold text-lg  text-white rounded-sm cursor-pointer hover:bg-gray-800"
                  type="submit"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full max-w-7xl  mx-auto pb-20">
        <div className="flex">
          <p className="font-bold text-light-textPrimary  text-xl mb-5">
            Categories
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

            <div className="flex justify-between w-full md:w-[49%] lg:w-[24%] ml-auto">
              <button
                onClick={() => setAddCategory(true)}
                className="rounded-md py-3 flex w-[49%] justify-center items-center bg-[#1FA076] text-white text-base font-semibold"
              >
                Add Category
              </button>
            </div>
          </div>
        </div>
        <div className="hidden p-3 bg-light-bgMid mb-5 items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4  pt-10  ">
          <div className="flex flex-wrap w-full justify-between gap-y-4">
            <div className="flex w-full md:w-[49%] lg:w-[24%] bg-red-100 rounded-md">
              <select className="bg-[#f2f4f6] block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg  focus:ring-transparent focus:border-[#1FA076]  ">
                <option selected>Status</option>
                <option value="US">Published</option>
                <option value="US">Unpublished</option>
              </select>
            </div>

            {/* <div className="flex justify-between w-full md:w-[49%] lg:w-[24%]">
              <button className="rounded-md py-3 flex w-[49%] justify-center items-center bg-[#1FA076] text-white text-base font-semibold">
                Refresh
              </button>
              <button className="rounded-md py-3 flex w-[49%] justify-center items-center bg-gray-400 text-white text-base font-semibold">
                Reset
              </button>
            </div> */}
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
                  ICON
                </th>
                <th scope="col" className="px-6 py-3">
                  TITLE
                </th>

                <th scope="col" className="px-6 py-3">
                  PUBLISHED
                </th>

                <th scope="col" className="px-6 py-3">
                  ACTIONS
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <Loader size="100" />
              ) : error ? (
                <h1>{error?.error}</h1>
              ) : (
                filteredCategories
                  ?.slice(indexOfFirstData, indexOfLastData)
                  .map((category, index) => (
                    <tr
                      key={index}
                      className="bg-white  border-b   hover:bg-gray-50 "
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center table-item">
                          <input
                            id={category._id}
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
                            src={JSON.parse(category.images)}
                            alt=""
                          />
                        </div>
                      </th>
                      <td className="px-6 py-4">{category.name} cli</td>

                      <td className="px-6 py-4">
                        <label className="relative inline-flex items-center me-5 cursor-pointer">
                          <input
                            type="checkbox"
                            value={category._id}
                            checked={category.published}
                            className="sr-only peer"
                            data-cat={category._id}
                            id={category._id}
                            onClick={(e) => editCat(e.target)}
                          />
                          <div
                            className={`w-11 h-6 bg-red-600 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-transparent  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-yellow-700 peer-checked:bg-green-900`}
                          ></div>
                        </label>
                      </td>

                      <td className="px-6 py-4">
                        <span className="flex gap-x-3 ">
                          <span className="relative">
                            <span
                              id={category._id}
                              onClick={(e) => populateEditForm(e.target)}
                              className="w-full h-full flex bg-red-900 absolute opacity-0 cursor-pointer"
                            ></span>
                            <Editor
                              className="cursor-pointer"
                              theme="outline"
                              size="20"
                              fill="#333"
                              strokeWidth={3}
                            />
                          </span>

                          <span className="relative">
                            <span
                              id={category._id}
                              className="w-full h-full flex bg-red-900 absolute opacity-0 cursor-pointer"
                              onClick={() => {
                                setDeleteModal(true), setDeleteId(category._id);
                              }}
                            ></span>
                            <Delete
                              className="text-red-600 cursor-pointer"
                              theme="outline"
                              size="20"
                              strokeWidth={3}
                            />
                          </span>
                        </span>
                      </td>
                    </tr>
                  ))
              )}
            </tbody>
          </table>
          {
            <Pagination
              perPage={perPage}
              totalData={filteredCategories?.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          }
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${
              deleteModal ? "flex" : "hidden"
            } bg-[rgba(107,107,107,0.5)] overflow-hidden w-screen h-screen`}
          >
            <div className="relative p-4 w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow">
                <button
                  type="button"
                  className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-[#f8fafb] hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={() => setDeleteModal(false)}
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
                    className="mx-auto mb-4 text-gray-400 w-12 h-12"
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
                  <h3 className="mb-5 text-lg font-normal text-gray-500">
                    Are you sure you want to delete this Category?
                  </h3>
                  <button
                    onClick={() => deleteCatgory()}
                    type="button"
                    className="text-white bg-[#20a076] hover:bg-[#1b805e] focus:ring-4 focus:outline-none focus:ring-[#20a076] font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    onClick={() => setDeleteModal(false)}
                    type="button"
                    className="text-gray-500 bg-[#ffffff] hover:bg-[#f8fafb] focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
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

export default Categories;
