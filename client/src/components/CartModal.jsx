import { Close, Delete } from "@icon-park/react";
import { useContext } from "react";
import { AppStateContext } from "../ContextApi/AppStateContext";

const CartModal = () => {
  const { cartModal, setCartModal } = useContext(AppStateContext);

  return (
    <div
      className={`h-screen w-screen fixed top-0  transition-all ease-in   z-50 flex justify-end ${
        cartModal ? "right-0" : "right-[-3000px]"
      }`}
    >
      <div className="flex h-full w-[400px] bg-[#f7f7f7] relative z-30 overflow-hidden pt-20 px-5">
        <div className="flex  h-fit justify-between w-full items-center absolute top-0 left-0 right-0">
          <span className=" border cursor-pointer h-[50px] w-[50px] justify-center items-center flex">
            <Close
              onClick={() => {
                setCartModal(false);
              }}
              className="hover:text-[#CEA384] ease-linear transition-all "
              theme="outline"
              size="23"
              strokeWidth={5}
            />
          </span>
          <span className="border-b border-t flex justify-center items-center h-[50px] w-[300px]">
            <p className="mb-0 font-bold text-xl">Shopping Cart</p>
          </span>
          <span className="font-bold text-lg p-2 border h-[50px] w-[50px] flex justify-center items-center">
            10
          </span>
        </div>
        {/* cart list starts here  */}
        <div className="flex flex-col overflow-x-auto pb-20">
          <div className=" border-b flex h-fit py-4">
            <div className="flex w-[80px] h-fit">
              <img src="/images/bg3.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium hover:text-[#CEA384] ease-linear transition-all cursor-pointer">
                Lenny Vegan Tote Bag - M / SaddleBrown
              </p>
              <span className="text-md font-semibold text-[#333]">QTY : 2</span>
              <span className="text-md font-semibold text-[#333]">$45.00</span>
            </div>
            <div className="flex">
              <Delete
                className="flex cursor-pointer hover:text-[#CEA384] ease-linear transition-all"
                theme="outline"
                size="22"
                strokeWidth={4}
              />
            </div>
          </div>
          <div className=" border-b flex h-fit py-4">
            <div className="flex w-[80px] h-fit">
              <img src="/images/bg3.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium hover:text-[#CEA384] ease-linear transition-all cursor-pointer">
                Lenny Vegan Tote Bag - M / SaddleBrown
              </p>
              <span className="text-md font-semibold text-[#333]">QTY : 2</span>
              <span className="text-md font-semibold text-[#333]">$45.00</span>
            </div>
            <div className="flex">
              <Delete
                className="flex cursor-pointer hover:text-[#CEA384] ease-linear transition-all"
                theme="outline"
                size="22"
                strokeWidth={4}
              />
            </div>
          </div>
          <div className=" border-b flex h-fit py-4">
            <div className="flex w-[80px] h-fit">
              <img src="/images/bg3.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium hover:text-[#CEA384] ease-linear transition-all cursor-pointer">
                Lenny Vegan Tote Bag - M / SaddleBrown
              </p>
              <span className="text-md font-semibold text-[#333]">QTY : 2</span>
              <span className="text-md font-semibold text-[#333]">$45.00</span>
            </div>
            <div className="flex">
              <Delete
                className="flex cursor-pointer hover:text-[#CEA384] ease-linear transition-all"
                theme="outline"
                size="22"
                strokeWidth={4}
              />
            </div>
          </div>
          <div className=" border-b flex h-fit py-4">
            <div className="flex w-[80px] h-fit">
              <img src="/images/bg3.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium hover:text-[#CEA384] ease-linear transition-all cursor-pointer">
                Lenny Vegan Tote Bag - M / SaddleBrown
              </p>
              <span className="text-md font-semibold text-[#333]">QTY : 2</span>
              <span className="text-md font-semibold text-[#333]">$45.00</span>
            </div>
            <div className="flex">
              <Delete
                className="flex cursor-pointer hover:text-[#CEA384] ease-linear transition-all"
                theme="outline"
                size="22"
                strokeWidth={4}
              />
            </div>
          </div>
          <div className=" border-b flex h-fit py-4">
            <div className="flex w-[80px] h-fit">
              <img src="/images/bg3.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium hover:text-[#CEA384] ease-linear transition-all cursor-pointer">
                Lenny Vegan Tote Bag - M / SaddleBrown
              </p>
              <span className="text-md font-semibold text-[#333]">QTY : 2</span>
              <span className="text-md font-semibold text-[#333]">$45.00</span>
            </div>
            <div className="flex">
              <Delete
                className="flex cursor-pointer hover:text-[#CEA384] ease-linear transition-all"
                theme="outline"
                size="22"
                strokeWidth={4}
              />
            </div>
          </div>
          <div className=" border-b flex h-fit py-4">
            <div className="flex w-[80px] h-fit">
              <img src="/images/bg3.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium hover:text-[#CEA384] ease-linear transition-all cursor-pointer">
                Lenny Vegan Tote Bag - M / SaddleBrown
              </p>
              <span className="text-md font-semibold text-[#333]">QTY : 2</span>
              <span className="text-md font-semibold text-[#333]">$45.00</span>
            </div>
            <div className="flex">
              <Delete
                className="flex cursor-pointer hover:text-[#CEA384] ease-linear transition-all"
                theme="outline"
                size="22"
                strokeWidth={4}
              />
            </div>
          </div>
          <div className=" border-b flex h-fit py-4">
            <div className="flex w-[80px] h-fit">
              <img src="/images/bg3.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium hover:text-[#CEA384] ease-linear transition-all cursor-pointer">
                Lenny Vegan Tote Bag - M / SaddleBrown
              </p>
              <span className="text-md font-semibold text-[#333]">QTY : 2</span>
              <span className="text-md font-semibold text-[#333]">$45.00</span>
            </div>
            <div className="flex">
              <Delete
                className="flex cursor-pointer hover:text-[#CEA384] ease-linear transition-all"
                theme="outline"
                size="22"
                strokeWidth={4}
              />
            </div>
          </div>
          <div className=" border-b flex h-fit py-4">
            <div className="flex w-[80px] h-fit">
              <img src="/images/bg3.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium hover:text-[#CEA384] ease-linear transition-all cursor-pointer">
                Lenny Vegan Tote Bag - M / SaddleBrown
              </p>
              <span className="text-md font-semibold text-[#333]">QTY : 2</span>
              <span className="text-md font-semibold text-[#333]">$45.00</span>
            </div>
            <div className="flex">
              <Delete
                className="flex cursor-pointer hover:text-[#CEA384] ease-linear transition-all"
                theme="outline"
                size="22"
                strokeWidth={4}
              />
            </div>
          </div>
          <div className=" border-b flex h-fit py-4">
            <div className="flex w-[80px] h-fit">
              <img src="/images/bg3.jpg" alt="" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-medium hover:text-[#CEA384] ease-linear transition-all cursor-pointer">
                Lenny Vegan Tote Bag - M / SaddleBrown
              </p>
              <span className="text-md font-semibold text-[#333]">QTY : 2</span>
              <span className="text-md font-semibold text-[#333]">$45.00</span>
            </div>
            <div className="flex">
              <Delete
                className="flex cursor-pointer hover:text-[#CEA384] ease-linear transition-all"
                theme="outline"
                size="22"
                strokeWidth={4}
              />
            </div>
          </div>
        </div>
        <div className="flex absolute bottom-0 w-full left-0 right-0">
          <span
            style={{ letterSpacing: "3px" }}
            className="w-1/2 py-4 font-semibold  text-sm flex justify-center text-center items-center cursor-pointer bg-[#2a2a2a] text-white hover:bg-[#CEA384] ease-linear transition-all"
          >
            VIEW CART
          </span>
          <span
            style={{ letterSpacing: "3px" }}
            className="w-1/2 py-4 font-semibold text-sm flex justify-center text-center items-center cursor-pointer bg-[#000000] text-white hover:bg-[#CEA384] ease-linear transition-all"
          >
            <p>CHECK OUT</p>
          </span>
        </div>
      </div>
      <div
        onClick={() => {
          setCartModal(false);
        }}
        className="flex h-full w-full absolute top-0 left-0 bg-[rgba(147,147,147,0.5)] z-10"
      ></div>
    </div>
  );
};

export default CartModal;
