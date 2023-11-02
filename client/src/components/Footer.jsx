import { Behance, Dribble, Instagram, Twitter } from "@icon-park/react";

const Footer = () => {
  return (
    <div className="">
      <div className="max-w-[1400px] mt-20 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="flex w-[80px] h-[80px] mb-10">
            <img src="/images/icons/insta2.png" alt="" />
          </div>
          <h1 className="text-5xl text-center font-semibold mb-5">
            Instagram Posts
          </h1>
        </div>
        <div className="flex flex-wrap justify-center ">
          <div className="flex w-full md:w-1/2  lg:w-[33%] p-3  parent_insta">
            <div className="flex relative overflow-hidden">
              <div className="flex w-full h-full top-0 right-0 bottom-0 left-0 absolute bg-[rgba(2,2,2,0.7)] justify-center items-center child_insta">
                {" "}
                <img
                  className=" w-[50px] h-[50px] "
                  src="/images/icons/instalt.png"
                  alt=""
                />
              </div>
              <img className="image_insta" src="/images/insta1.jpg" alt="" />
            </div>
          </div>
          <div className="flex w-full md:w-1/2  lg:w-[33%] parent_insta p-3">
            <div className="flex relative overflow-hidden">
              <div className="flex w-full h-full top-0 right-0 bottom-0 left-0 absolute bg-[rgba(2,2,2,0.7)] justify-center items-center child_insta">
                {" "}
                <img
                  className=" w-[50px] h-[50px] "
                  src="/images/icons/instalt.png"
                  alt=""
                />
              </div>
              <img className="image_insta" src="/images/insta2.jpg" alt="" />
            </div>
          </div>
          <div className="flex w-full md:w-1/2  lg:w-[33%] parent_insta p-3">
            <div className="flex relative overflow-hidden">
              <div className="flex w-full h-full top-0 right-0 bottom-0 left-0 absolute bg-[rgba(2,2,2,0.7)] justify-center items-center child_insta">
                {" "}
                <img
                  className=" w-[50px] h-[50px] "
                  src="/images/icons/instalt.png"
                  alt=""
                />
              </div>
              <img className="image_insta" src="/images/insta3.jpg" alt="" />
            </div>
          </div>
          <div className="flex w-full md:w-1/2  lg:w-[33%] parent_insta p-3">
            <div className="flex relative overflow-hidden">
              <div className="flex w-full h-full top-0 right-0 bottom-0 left-0 absolute bg-[rgba(2,2,2,0.7)] justify-center items-center child_insta">
                {" "}
                <img
                  className=" w-[50px] h-[50px] "
                  src="/images/icons/instalt.png"
                  alt=""
                />
              </div>
              <img className="image_insta" src="/images/insta4.jpg" alt="" />
            </div>
          </div>
          <div className="flex w-full md:w-1/2  lg:w-[33%] parent_insta p-3">
            <div className="flex relative overflow-hidden">
              <div className="flex w-full h-full top-0 right-0 bottom-0 left-0 absolute bg-[rgba(2,2,2,0.7)] justify-center items-center child_insta">
                {" "}
                <img
                  className=" w-[50px] h-[50px] "
                  src="/images/icons/instalt.png"
                  alt=""
                />
              </div>
              <img className="image_insta" src="/images/insta5.jpg" alt="" />
            </div>
          </div>
          <div className="flex w-full md:w-1/2  lg:w-[33%] parent_insta p-3">
            <div className="flex relative overflow-hidden">
              <div className="flex w-full h-full top-0 right-0 bottom-0 left-0 absolute bg-[rgba(2,2,2,0.7)] justify-center items-center child_insta">
                {" "}
                <img
                  className=" w-[50px] h-[50px] "
                  src="/images/icons/instalt.png"
                  alt=""
                />
              </div>
              <img className="image_insta" src="/images/insta1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 bg-[#f7f4f1]">
        <div className="flex flex-col   px-4 py-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl text-center font-semibold mb-5">
              Our Newsletter
            </h1>
            <p className="font-semibold text-base text-center text-[#222222]">
              Join our list and get 15% off your first purchase! Don’t worry we
              don’t spam
            </p>
          </div>
          <div className="flex w-full md:w-[65%] lg:w-[40%] mt-6 mx-auto border-b-2 border-black">
            <div className="flex w-full items-center">
              <input
                className="py-2 px-4 border-0 focus:outline-none bg-transparent"
                type="text"
                placeholder="Enter your Email..."
              />
              <button className="flex w-fit font-normal text-base text-black ml-auto">
                subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex md:justify-between py-10 flex-col gap-y-4 justify-center md:flex-row px-2 md:px-4 lg:px-6">
          <div className="flex flex-wrap gap-x-6 justify-center md:justify-start">
            <span>Cross Body Bags </span>
            <span>Beach Bag </span>
            <span>Day Bags </span>
            <span>Shopper & Totte </span>
          </div>
          <div className="flex justify-center  gap-x-5 items-center">
            <Twitter theme="outline" size="24" fill="#333" strokeWidth={3} />
            <Behance theme="outline" size="24" fill="#333" strokeWidth={3} />
            <Instagram theme="outline" size="24" fill="#333" strokeWidth={3} />
            <Dribble theme="outline" size="24" fill="#333" strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
