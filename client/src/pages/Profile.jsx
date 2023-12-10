import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { NairaFormatter } from "../utils/cartUtils";
import { Editor } from "@icon-park/react";
import { useGetMyOrdersQuery } from "../slices/ordersApiSlice";
import { formatDate } from "../functions";
import { useDispatch, useSelector } from "react-redux";
import { useProfileMutation } from "../slices/usersApiSlice";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;
  const indexOfLastData = currentPage * perPage;

  const indexOfFirstData = indexOfLastData - perPage;

  const paginate = (number) => {
    let page = orders.length / perPage;
    if (number > 0 && number <= page) {
      setCurrentPage(number);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  const { data: orders, isLoading, error } = useGetMyOrdersQuery();
  const { userInfo } = useSelector((state) => state.auth);

  const data = {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    address: userInfo.address,
    phone: userInfo.phone,
    email: userInfo.email,
    _id: userInfo._id,
    passCheck: "",
    newPass: "",
    oldPass: "",
  };

  const [formData, setFormData] = useState(data);
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.passCheck === formData.newPass) {
      if (
        formData.lastName != "" &&
        formData.firstName != "" &&
        formData.address != "" &&
        formData.phone != "" &&
        formData.email != ""
      ) {
        delete formData.passCheck;
        if (formData.newPass === "") {
          delete formData.newPass;
          delete formData.oldPass;
        }

        console.log(formData);

        try {
          const res = await updateProfile(formData).unwrap();
          // dispatch(setCredentials(res));
          console.log(res);
          toast.info("Profile Updated successfully");
        } catch (error) {
          toast.error(error?.data?.message || error.error);
        }
      }
    }
  };

  return (
    <div className="flex flex-col max-w-7xl mx-auto  pt-20 gap-y-10">
      <div className="flex w-full h-full overflow-x-scroll pt-5">
        <div className="flex w-full px-5">
          <form
            onSubmit={handleSubmit}
            className="flex flex-wrap  w-full  gap-y-5 justify-between "
          >
            <div className="flex w-full">
              <div className="flex items-center justify-center rounded-full  h-56 relative  mx-auto w-56">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center rounded-full w-56 h-56 border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50   hover:bg-gray-100 "
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
            </div>
            <div className="flex w-full md:w-[49%]  ">
              <input
                className="w-full    rounded-md border-gray-500 border py-3 focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>

            <div className="flex w-full md:w-[49%]">
              <input
                className="w-full   rounded-md  py-3 border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                type="text"
                placeholder="Last Name    "
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />
            </div>
            <div className="flex w-full md:w-[49%]">
              <input
                className="w-full   rounded-md  py-3 border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                type="text"
                onChange={handleChange}
                placeholder="Phone Number "
                name="phone"
                value={formData.phone}
              />
            </div>
            <div className="flex w-full md:w-[49%]">
              <input
                className="w-full   rounded-md  py-3 border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                type="email"
                placeholder="Email Address"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
            </div>
            <div className="flex w-full md:w-[49%]">
              <input
                className="w-full  py-3   rounded-md border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                type="password"
                placeholder="Old Password"
                name="oldPass"
                value={formData.oldPass}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full md:w-[49%]">
              <input
                className="w-full  py-3   rounded-md border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                type="password"
                placeholder="New Password"
                name="passCheck"
                onChange={handleChange}
                value={formData.passCheck}
              />
            </div>
            <div className="flex w-full md:w-[49%]">
              <input
                className="w-full  py-3   rounded-md border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                type="password"
                placeholder="New Password"
                onChange={handleChange}
                name="newPass"
                value={formData.newPass}
              />
            </div>
            <div className="flex w-full ">
              <textarea
                className="w-full  p-4  rounded-md  border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                placeholder="Address"
                rows={5}
                value={formData.address}
                name="address"
                onChange={handleChange}
              />
            </div>

            <div className="flex  w-full">
              <input
                className="bg-[#1FA076] px-10 py-3 font-bold text-lg  text-white rounded-sm cursor-pointer hover:bg-gray-800"
                type="submit"
                value="Save"
              />
            </div>
          </form>
        </div>
      </div>

      <h1 className="mt-10  text-gray-700 font-bold text-xl">Orders</h1>

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
                PROGRESS
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3">
                INVOICE
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading && <Loader />}
            {orders
              ?.slice(indexOfFirstData, indexOfLastData)
              .map((product, index) => (
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
                  <td className="px-6 py-4">{formatDate(product.createdAt)}</td>
                  <td className="px-6 py-4">SAMMY AJAYI</td>
                  <td className="px-6 py-4">online</td>
                  <td className="px-6 py-4">
                    {NairaFormatter.format(product.totalPrice)}
                  </td>
                  <td className="px-6 py-4">Pending</td>
                  <td className="px-6 py-4">
                    <div className="flex w-full rounded-md">
                      {product.isPaid ? (
                        <p className="font-bold text-green-800 text-sm">Paid</p>
                      ) : (
                        <p className="font-bold text-red-800 text-sm">
                          Not Paid
                        </p>
                      )}
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
  );
};

export default Profile;
