import { Right } from "@icon-park/react";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <div className="flex flex-col product_page min-h-screen w-full relative  pt-20 ">
      <div className="flex flex-col max-w-[1400px] mx-auto w-full ">
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
        <div className="flex mt-10">
          <div className="flex w-[80%] bg-gray-100 ">
            <div className="flex w-1/2 flex-col">
              <div className="flex">
                <img src="/images/bg20.jpg" alt="" />
              </div>
              <div className="flex w-full justify-between mt-3">
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
            <div className="flex"></div>
          </div>

          <div className="flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
