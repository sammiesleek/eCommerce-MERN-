const OrderSummary = () => {
  return (
    <div className="py-[100px] proces_order px-4 min-h-screen">
      <div className="flex w-full justify-center items-center my-10">
        <h1 className="text-3xl font-bold">Shipping</h1>
      </div>
      <div className="flex  gap-x-10 justify-center gap-y-10  flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 lg:w-[40%] gap-y-5">
          <div className="flex">
            <p className="text-lg font-semibold">Contact Information</p>
          </div>
          <div className="flex flex-col mt-5 gap-y-7">
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none bg-transparent py-3 focus:border-b-black w-full  px-2 font-normal text-base"
                placeholder="Name"
                type="text"
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none bg-transparent py-3 focus:border-b-black w-full  px-2 font-normal text-base"
                placeholder="Email Address"
                type="text"
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none bg-transparent py-3 focus:border-b-black w-full  px-2 font-normal text-base"
                placeholder="Phone Number"
                type="text"
              />
            </div>
            <div className="flex w-full">
              <input
                className="border-b focus:outline-none bg-transparent py-3 focus:border-b-black w-full  px-2 font-normal text-base"
                placeholder="Full Address"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full md:w-1/2 lg:w-[40%] border max-w-[400px]">
          <span className="flex w-full border-b pl-4">
            <h1 className="py-4 font-bold text-gray-600 text-2xl">
              Order Summary
            </h1>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-semibold text-gray-600 text-lg">Items</p>
              <p className="ml-auto">099</p>
            </span>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-semibold text-gray-600 text-lg">Delivery</p>
              <p className="ml-auto">099</p>
            </span>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-semibold text-gray-600 text-lg">VAT</p>
              <p className="ml-auto">099</p>
            </span>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-semibold text-gray-600 text-lg">Total</p>
              <p className="ml-auto">099</p>
            </span>
          </span>
          <span className=" flex w-full  py-4  bg-black hover:bg-[#CEA384] justify-center items-center">
            <button className=" text-white  font-bold text-xl">
              Complete Order
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
