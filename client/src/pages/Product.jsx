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
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Product;
