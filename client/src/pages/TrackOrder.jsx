import { useSelector } from "react-redux";
import { NairaFormatter } from "../utils/cartUtils";
import { useEffect } from "react";

const TrackOrder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    shippingAddress,

    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  } = useSelector((state) => state.cart);
  return (
    <div className="py-[100px] proces_order px-4 min-h-screen">
      <div className="flex  my-10">
        <h1 className="text-3xl font-bold">
          Order: Lorem ipsum dolor sit amet consectetur
        </h1>
      </div>
      <div className="flex  gap-x-10 justify-center gap-y-10  flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 lg:w-[40%] gap-y-5 border-b">
          <div className="flex">
            <p className="text-3xl font-semibold">Contact Information</p>
          </div>
          <div className="flex flex-col mt-5 gap-y-7">
            <span className="flex items-center">
              <p className="font-bold text-gray-800 text-xl">Name:</p>
              <p className="font-normal ml-5 text-gray-600 text-lg">
                {shippingAddress.lastName} {shippingAddress.firstName}
              </p>
            </span>

            <span className="flex items-center">
              <p className="font-bold text-gray-800 text-xl">Phone Number:</p>
              <p className="font-normal ml-5 text-gray-600 text-lg">
                {shippingAddress.phone}
              </p>
            </span>
            <span className="flex items-center">
              <p className="font-bold text-gray-800 text-xl">Full Address:</p>
              <p className="font-normal ml-5 text-gray-600 text-lg">
                {shippingAddress.address}
              </p>
            </span>
          </div>
          <p className="py-2 px-5 bg-gray-900 w-fit text-gray-200">
            Not Delivered
          </p>
        </div>
        <div className="flex flex-col  w-full md:w-1/2 lg:w-[40%] border max-w-[400px]">
          <span className="flex w-full border-b pl-4">
            <h1 className="py-4 font-bold text-gray-600 text-2xl">
              Order Summary
            </h1>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-bold text-gray-800 text-lg">Items</p>
              <p className="ml-auto">{NairaFormatter.format(itemsPrice)}</p>
            </span>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-bold text-gray-800 text-lg">Delivery</p>
              <p className="ml-auto">{NairaFormatter.format(shippingPrice)}</p>
            </span>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-bold text-gray-800 text-lg">VAT</p>
              <p className="ml-auto">{NairaFormatter.format(taxPrice)}</p>
            </span>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-bold text-gray-800 text-lg">Total</p>
              <p className="ml-auto">{NairaFormatter.format(totalPrice)}</p>
            </span>
          </span>
          <span className=" flex w-full  py-4  bg-black hover:bg-[#CEA384] justify-center items-center">
            <button className=" text-white  font-bold text-xl">
              Make Payment
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
