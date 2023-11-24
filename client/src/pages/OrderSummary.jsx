import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NairaFormatter } from "../utils/cartUtils";
import { clearCartItems, saveShippindAddress } from "../slices/cartSlice";
import { useCreateOrderMutation } from "../slices/ordersApiSlice";
import { toast } from "react-toastify";

const OrderSummary = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const {
    cartItems,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    shippingAddress,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cartItems || cartItems.length < 1) {
      navigate("/");
    }
  });
  const [createOrder, { isLoading, error }] = useCreateOrderMutation();

  const data = {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    address: userInfo.address,
    phone: userInfo.phone,
    email: userInfo.email,
  };
  const [formData, setFormData] = useState(
    shippingAddress.address ? shippingAddress : data
  );

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(saveShippindAddress(formData));

      const res = await createOrder({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod: "online",
        itemsPrice: itemsPrice,
        taxPrice: taxPrice,
        shippingPrice: shippingPrice,
        totalPrice: totalPrice,
      }).unwrap();
      navigate(`/tracking/${res._id}`);

      setTimeout(() => {
        // dispatch(clearCartItems());
      }, 200);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="py-[100px] proces_order px-4 min-h-screen">
      <div className="flex w-full justify-center items-center my-10">
        <h1 className="text-3xl font-bold">Shipping</h1>
      </div>
      <form onSubmit={handleSubmit}>
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
                  value={userInfo.firstName + " " + userInfo.lastName}
                  disabled
                />
              </div>
              <div className="flex w-full">
                <input
                  className="border-b focus:outline-none bg-transparent py-3 focus:border-b-black w-full  px-2 font-normal text-base"
                  placeholder="Email Address"
                  type="email"
                  value={userInfo.email}
                  disabled
                />
              </div>
              <div className="flex w-full">
                <input
                  className="border-b focus:outline-none bg-transparent py-3 focus:border-b-black w-full  px-2 font-normal text-base"
                  placeholder="Phone Number"
                  type="text"
                  value={formData.phone}
                  name="phone"
                  onChange={handleChange}
                />
              </div>
              <div className="flex w-full">
                <input
                  className="border-b focus:outline-none bg-transparent py-3 focus:border-b-black w-full  px-2 font-normal text-base"
                  placeholder="Full Address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
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
                <p className="ml-auto">{NairaFormatter.format(itemsPrice)}</p>
              </span>
            </span>
            <span className=" flex w-full pl-4 py-4 border-b">
              <span className="flex w-[300px]">
                <p className=" font-semibold text-gray-600 text-lg">Delivery</p>
                <p className="ml-auto">
                  {NairaFormatter.format(shippingPrice)}
                </p>
              </span>
            </span>
            <span className=" flex w-full pl-4 py-4 border-b">
              <span className="flex w-[300px]">
                <p className=" font-semibold text-gray-600 text-lg">VAT</p>
                <p className="ml-auto">{NairaFormatter.format(taxPrice)}</p>
              </span>
            </span>
            <span className=" flex w-full pl-4 py-4 border-b">
              <span className="flex w-[300px]">
                <p className=" font-semibold text-gray-600 text-lg">Total</p>
                <p className="ml-auto">{NairaFormatter.format(totalPrice)}</p>
              </span>
            </span>
            <span className=" flex w-full   bg-black hover:bg-[#CEA384] justify-center items-center">
              <button
                className="  py-4  text-white  font-bold text-xl w-full
              h-full"
              >
                Complete Order
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderSummary;
