import { ExpressDelivery, Shield, Wallet } from "@icon-park/react";

const SubHero = () => {
  return (
    <div className="flex  max-w-[1400px] mx-auto p-4  flex-wrap gap-y-4 mt-10 ">
      <div className="flex px-4 w-full md:w-1/2 lg:w-[33%]">
        <div className="flex  border-white border-4 justify-center items-center flex-col py-8 px-5 ">
          <ExpressDelivery
            theme="outline"
            size="50"
            fill="#333"
            strokeWidth={2}
            className="mb-3"
          />
          <p className="mb-0 text-center text-black font-bold text-xl">
            Express Delivery
          </p>
          <p className="mb-0 text-center text-base font-normal">
            As soon as you place an order, we process the order and dispatch
            your goods
          </p>
        </div>
      </div>
      <div className="flex px-4 w-full md:w-1/2 lg:w-[33%]">
        <div className="flex  border-white border-4 justify-center items-center flex-col py-8 px-5 ">
          <Wallet
            theme="outline"
            size="50"
            fill="#333"
            strokeWidth={2}
            className="mb-3"
          />
          <p className="mb-0 text-center text-black font-bold text-xl">
            Safe Payment
          </p>
          <p className="mb-0 text-center text-base font-normal">
            Pay with the world&apos;s most popular and secure payment methods
          </p>
        </div>
      </div>
      <div className="flex px-4 w-full md:w-1/2 lg:w-[33%]">
        <div className="flex  border-white border-4 justify-center items-center flex-col py-8 px-5 ">
          <Shield
            theme="outline"
            size="50"
            fill="#333"
            strokeWidth={2}
            className="mb-3"
          />

          <p className="mb-0 text-center text-black font-bold text-xl">
            Shop With Confidence
          </p>
          <p className="mb-0 text-center text-base font-normal">
            Our Buyer Protection covers your purchase from click to delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
