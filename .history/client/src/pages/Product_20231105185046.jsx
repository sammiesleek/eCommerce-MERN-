import { Like, Minus, Plus, Right, Star, User } from "@icon-park/react";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col product_page min-h-screen w-full relative  pt-20 ">
        <div className="flex flex-col max-w-[1600px] mx-auto w-full px-3">
          <div className="flex mt-4 ">
            <span className="flex">
              <span className="flex justify-center items-center">
                <Link className="text-black font-semibold" to="/">
                  Home
                </Link>
                <Right
                  className="text-[#999]"
                  theme="outline"
                  size="20"
                  strokeWidth={3}
                />
              </span>
              <p>product</p>
            </span>
          </div>
          <div className="flex mt-10 flex-col xl:flex-row ">
            <div className="flex lg:w-full xl:w-[75%] flex-col mdlg:flex-row ">
              <div className="flex w-full mdlg:w-1/2 flex-col">
                <div className="flex">
                  <img src="/images/bg20.jpg" alt="" />
                </div>
                <div className="flex w-full justify-between mt-3 gap-x-5">
                  <div className="flex w-[23%] justify-center items-center ">
                    <img src="/images/bg3.jpg" alt="" />
                  </div>
                  <div className="flex w-[23%] justify-center items-center ">
                    <img src="/images/bg3.jpg" alt="" />
                  </div>
                  <div className="flex w-[23%] justify-center items-center ">
                    <img src="/images/bg3.jpg" alt="" />
                  </div>
                  <div className="flex w-[23%] justify-center items-center ">
                    <img src="/images/bg9.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="flex w-full mdlg:w-1/2 flex-col px-8">
                <div className="flex flex-col">
                  <div className="flex flex-col border-b ">
                    <span className=" flex items-start justify-start">
                      <h4 className="text-3xl font-semibold">
                        Contrast Weave Handheld Bucket Bag
                      </h4>
                      <Like
                        className=" flex justify-self-start cursor-pointer text-black bg-transparent hover:bg-[#CEA384] hover:text-white transition-all ease-in-out rounded-full p-2 border ml-5 hover:border-transparent"
                        theme="outline"
                        size="18"
                        strokeWidth={3}
                      />
                    </span>
                    <p className="text-[#CEA384] text-2xl mt-2 font-semibold mb-0">
                      $ 55.00
                    </p>
                    <span className="flex  pb-4 mt-2 items-center">
                      <span className="flex items-center gap-x-2">
                        <Star
                          className=" text-[#CEA384] "
                          theme="filled"
                          size="20"
                          strokeWidth={3}
                        />
                        <Star
                          className=" text-[#CEA384] "
                          theme="filled"
                          size="20"
                          strokeWidth={3}
                        />
                        <Star
                          className=" text-[#CEA384] "
                          theme="outline"
                          size="20"
                          strokeWidth={3}
                        />

                        <Star
                          className=" text-[#CEA384] "
                          theme="outline"
                          size="20"
                          strokeWidth={3}
                        />
                        <Star
                          className=" text-[#CEA384] "
                          theme="outline"
                          size="20"
                          strokeWidth={3}
                        />
                      </span>
                      <p className="mb-0 ml-6 text-[#4a4a4a]">3 reviews</p>
                    </span>
                  </div>
                  <div className="flex mt-5 flex-col">
                    <p className="text-[#4a4a4a] text-base">
                      Step back in time with this cool shoulder-held bucket bag.
                      It’s crafted from grained faux leather, with a boxy
                      two-tone pattern of interwoven strips to the front. The
                      zipped interior features a zipped compartment for
                      safe-keeping; ...
                    </p>

                    <span className="flex items-center mt-5">
                      <p className="mb-0 border-b border-b-black w-[50px]">
                        SIZE
                      </p>

                      <span className="ml-14 flex">
                        <input className="" type="checkbox" />
                        <label className="ml-1" htmlFor="">
                          M
                        </label>
                      </span>
                    </span>
                    <span className="flex items-center mt-5">
                      <p className="mb-0 border-b border-b-black w-[70px]">
                        COLOR
                      </p>

                      <span className="ml-7">
                        <span className="flex w-[40px] h-[40px] rounded-full justify-center items-center  cursor-pointer">
                          <img
                            className="rounded-full   "
                            src="/images/bg3.jpg"
                            alt=""
                          />
                        </span>
                      </span>
                    </span>

                    {/* add to cart  */}
                    <div className="flex mt-10 gap-x-4  w-fit flex-col gap-y-4">
                      <div className="flex gap-x-4 ">
                        <div className="flex border-2 border-black w-[105px] h-[54px] ">
                          <span className="flex justify-center items-center w-1/2 border-r border-r-black text-lg font-extrabold">
                            <input
                              className="pl-4 bg-transparent  w-full h-full flex justify-center items-center border-none focus:outline-none "
                              type="text"
                              value="5"
                            />
                          </span>
                          <span className="flex flex-col w-1/2">
                            <span className="h-1/2 w-full  flex justify-center items-center border-b  border-b-black">
                              <Plus
                                className=" hover:text-[#CEA384] "
                                theme="filled"
                                size="22"
                                strokeWidth={5}
                              />
                            </span>
                            <span className="h-1/2 w-full flex justify-center items-center">
                              <Minus
                                className=" hover:text-[#CEA384] "
                                theme="filled"
                                size="22"
                                strokeWidth={5}
                              />
                            </span>
                          </span>
                        </div>
                        <button
                          style={{ letterSpacing: "2px" }}
                          className=" px-10 flex justify-center h-[54px] items-center  bg-[#CEA384] hover:bg-black text-white transition-all ease-linear font-semibold "
                        >
                          ADD TO CART
                        </button>
                      </div>
                      <button
                        style={{ letterSpacing: "2px" }}
                        className=" px-10 flex justify-center items-center h-[54px] hover:bg-[#CEA384] bg-black text-white transition-all ease-linear font-semibold "
                      >
                        BUY IT NOW
                      </button>
                      <span className="flex items-center">
                        <p className="text-black text-base mr-3">Category: </p>{" "}
                        <p className="text-[#4a4a4a] text-base">Bags</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex lg:w-full xl:w-[25%]  flex-col p-2">
              <div className="flex flex-col gap-y-3 ">
                <div className="flex flex-col justify-center items-center py-5 px-10 border transition-all ease-in-out hover:border-black">
                  <h4 className="font-semibold text-xl text-black border-b border-b-black pb-3 mb-8 ">
                    Why Choose Us?{" "}
                  </h4>
                  <p className="text-[#7e7e7e] font-normal text-center ">
                    Official Herschel stockist Australian warranty assistance &
                    support Australian shipping & returns.Customer first
                    experience environmentally focused
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center py-5 px-10 border transition-all ease-in-out hover:border-black">
                  <h4 className="font-semibold text-xl text-black border-b border-b-black pb-3 mb-8 ">
                    Returns
                  </h4>
                  <p className="text-[#7e7e7e] font-normal text-center ">
                    Return this product within 100 days if you change your mind.
                    Get a refund/replacement & free return shipping if it
                    arrives damaged or not as described
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center py-5 px-10 border transition-all ease-in-out hover:border-black">
                  <h4 className="font-semibold text-xl text-black border-b border-b-black pb-3 mb-8 ">
                    Shippingx
                  </h4>
                  <p className="text-[#7e7e7e] font-normal text-center ">
                    Free if stated near price. $9.95 Australia wide (up to 10
                    items). $18.95 for Express Post (generally 1 business day).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-10 max-w-[1400px] px-3 ">
        <div className="flex flex-col  max-w-fit">
          <h1 className="font-bold text-xl">Ratings + Reviews</h1>

          <span className="flex items-center gap-x-2 mt-2">
            <Star
              className=" text-[#CEA384] "
              theme="filled"
              size="20"
              strokeWidth={2}
            />
            <Star
              className=" text-[#CEA384] "
              theme="filled"
              size="20"
              strokeWidth={2}
            />
            <Star
              className=" text-[#CEA384] "
              theme="outline"
              size="20"
              strokeWidth={2}
            />

            <Star
              className=" text-[#CEA384] "
              theme="outline"
              size="20"
              strokeWidth={2}
            />
            <Star
              className=" text-[#CEA384] "
              theme="outline"
              size="20"
              strokeWidth={2}
            />
          </span>

          <div className="flex  flex-col gap-y-3 mt-5">
            <div className="flex items-center gap-x-4">
              <p className="font-normal text-lg">5 star</p>
              <span className="w-[400px] h-2 bg-gray-200 flex">
                <span className="w-full h-full bg-[#CEA384]"></span>
              </span>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="font-normal text-lg">4 star</p>
              <span className="w-[400px] h-2 bg-gray-200 flex">
                <span className="w-[80%] h-full bg-[#CEA384]"></span>
              </span>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="font-normal text-lg">3 star</p>
              <span className="w-[400px] h-2 bg-gray-200 flex">
                <span className="w-[60%] h-full bg-[#CEA384]"></span>
              </span>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="font-normal text-lg">2 star</p>
              <span className="w-[400px] h-2 bg-gray-200 flex">
                <span className="w-[40%] h-full bg-[#CEA384]"></span>
              </span>
            </div>
            <div className="flex items-center gap-x-4">
              <p className="font-normal text-lg">1 star</p>
              <span className="w-[400px] h-2 bg-gray-200 flex">
                <span className="w-[10%] h-full bg-[#CEA384]"></span>
              </span>
            </div>
          </div>
          <div className="flex mt-5 font-bold text-lg flex-col bg-green-800">
            <p>Submit Review </p>
            <div className="flex flex-col">
              <div className="flex border w-full">
                <textarea
                  className="border-0 focus:outline-none text-base font-normal py-3 px-3 w-full"
                  name=""
                  placeholder="Write a review..."
                  id=""
                  rows="3"
                />
              </div>
              <span className="flex items-center gap-x-2 mt-4">
                <Star
                  className=" text-[#CEA384] cursor-pointer "
                  theme="outline"
                  size="22"
                  strokeWidth={2}
                />
                <Star
                  className=" text-[#CEA384] cursor-pointer  "
                  theme="outline"
                  size="22"
                  strokeWidth={2}
                />
                <Star
                  className=" text-[#CEA384] cursor-pointer "
                  theme="outline"
                  size="22"
                  strokeWidth={2}
                />

                <Star
                  className=" text-[#CEA384] cursor-pointer "
                  theme="outline"
                  size="22"
                  strokeWidth={2}
                />
                <Star
                  className=" text-[#CEA384] cursor-pointer "
                  theme="outline"
                  size="22"
                  strokeWidth={2}
                />
              </span>
              <button className="flex justify-center items-center py-2 px-5 w-fit bg-[#CEA384] mt-4 text-white hover:bg-black transition-all ease-linear">
                Submit
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-10 bg-red-400">
            <div className="flex">
              <h1>reviews from buyers</h1>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex flex-col  border p-4">
                <span className="flex items-center gap-x-2 mb-3  ">
                  <User theme="filled" size="24" fill="#333" />

                  <p className="mt-1">Sammy</p>
                </span>
                <span className="flex items-center gap-x-2">
                  <Star
                    className=" text-[#CEA384] cursor-pointer "
                    theme="outline"
                    size="22"
                    strokeWidth={2}
                  />
                  <Star
                    className=" text-[#CEA384] cursor-pointer  "
                    theme="outline"
                    size="22"
                    strokeWidth={2}
                  />
                  <Star
                    className=" text-[#CEA384] cursor-pointer "
                    theme="outline"
                    size="22"
                    strokeWidth={2}
                  />

                  <Star
                    className=" text-[#CEA384] cursor-pointer "
                    theme="outline"
                    size="22"
                    strokeWidth={2}
                  />
                  <Star
                    className=" text-[#CEA384] cursor-pointer "
                    theme="outline"
                    size="22"
                    strokeWidth={2}
                  />
                </span>
                <p className="text-[#5c5c5c] font-normal mt-2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos, optio labore? Aperiam libero quos vero mollitia
                  optio neque deleniti voluptatum.
                </p>
                <p className="text-[#616161] text-sm font-normal">
                  Nov 03, 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
