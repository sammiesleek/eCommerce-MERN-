import React from "react";

const Profile = () => {
  return (
    <div className="flex max-w-7xl mx-auto ">
      <div
        className="flex flex-col p w-full
        "
        // h-screen shadow-2xl bg-light-bgMid  w-full md:w-80% lg:w-[800px] z-50 transition-all ease-in-out `}
      >
        <div className="flex bg-light-bgHeavy  w-full justify-between p-5 h-fit">
          <span className="flex flex-col">
            <p className="font-semibold text-xl text-light-textPrimary">
              Add Product
            </p>
            <p className="font-normal text-sm text-light-textPrimary">
              Add Product and neccessary informations here
            </p>
          </span>
          {/* <span
          onClick={() => setAddProduct(false)}
          className="flex rounded-full bg-white h-10 justify-center items-center w-10 shadow-sm hover:rotate-[180deg] transition-all ease-linear"
        >
          <Close
            className="cursor-pointer text-light-textPrimary"
            theme="outline"
            size="20"
            strokeWidth={7}
          />
        </span> */}
        </div>
        <div className="flex w-full h-full overflow-x-scroll pt-5">
          <div className="flex w-full px-5">
            <form action="" className="flex flex-col w-1/2  gap-y-5">
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
              <div className="flex w-full  ">
                <input
                  className="w-full    rounded-md border-gray-500 border py-3 focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                  type="text"
                  placeholder="First Name"
                />
              </div>

              <div className="flex">
                <input
                  className="w-full   rounded-md  py-3 border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                  type="text"
                  placeholder="Last Name    "
                />
              </div>
              <div className="flex">
                <input
                  className="w-full  py-3   rounded-md border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                  type="password"
                  placeholder="Old Password"
                />
              </div>
              <div className="flex">
                <input
                  className="w-full  py-3   rounded-md border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                  type="password"
                  placeholder="New Password"
                />
              </div>
              <div className="flex">
                <textarea
                  className="w-full  p-4  rounded-md  border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-gray-500"
                  placeholder="Address"
                  rows={5}
                />
              </div>

              <div className="flex ">
                <input
                  className="bg-[#1FA076] px-10 py-3 font-bold text-lg  text-white rounded-sm cursor-pointer hover:bg-gray-800"
                  type="button"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
