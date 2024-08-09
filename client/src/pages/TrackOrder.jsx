import { NairaFormatter } from "../utils/cartUtils";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makePayment, paystackScript } from "../functions";
import {
  useConfirmPaymentMutation,
  useGetOrderDetailsQuery,
  useGetPaystackClientIdQuery,
} from "../slices/ordersApiSlice";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import Profile from "./Profile";
import { AppStateContext } from "../ContextApi/AppStateContext";

const TrackOrder = () => {
  paystackScript();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const [confirmPayment, { isLoading: confirming, error }] =
    useConfirmPaymentMutation();

  const { profile } = useContext(AppStateContext);
  const { id: orderId } = useParams();
  const {
    data: order,
    refetch,
    isLoading,
    isError,
  } = useGetOrderDetailsQuery(orderId);
  const {
    data: clientId,
    refetch: refectf,
    isLoading: loadingPaystack,
    error: errorPaystack,
  } = useGetPaystackClientIdQuery();

  // const { userInfo } = useSelector((state) => state.auth);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const { shippingAddress } = useSelector((state) => state.cart);
  if (isLoading) {
    return (
      <div className="flex mt-40">
        <Loader size="50" />;
      </div>
    );
  }

  const handlePayment = () => {
    makePayment(
      clientId.clientId,
      orderId,
      order.totalPrice,
      profile,
      function (response) {
        setPaymentLoading(true);
        var ref = response.reference;
        try {
          const data = { ref, orderId, amount: order.totalPrice };
          const res = confirmPayment(data).unwrap();
          res
            .then((response) => {
              if (response.success) toast.success("Payment confirmed");

              setPaymentLoading(false);
              window.location.reload();
            })
            .catch((error) => {
              toast.error(error?.data?.message);
              setPaymentLoading(false);
            });
        } catch (error) {
          toast.error(error?.data?.message);
          setPaymentLoading(false);
        }
      },
      function () {
        toast.info("Payment cancled");
      }
    );
  };

  return (
    <div className="py-[100px] proces_order px-4 min-h-screen">
      <div className="flex  ">
        <h1 className="text-3xl font-bold">Order: {order._id}</h1>
      </div>
      <div className="flex  mt-32 gap-x-10 justify-center gap-y-10  flex-col md:flex-row">
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
                {order.shippingAddress}
              </p>
            </span>
          </div>
          {!order.isDelivered ? (
            <p className="py-2 px-5 bg-red-300 w-fit text-gray-900">
              Not Delivered
            </p>
          ) : (
            <p className="py-2 px-5 bg-green-200 w-fit text-gray-900">
              Delivered
            </p>
          )}
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
              <p className="ml-auto">
                {NairaFormatter.format(order.itemsPrice)}
              </p>
            </span>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-bold text-gray-800 text-lg">Delivery</p>
              <p className="ml-auto">
                {NairaFormatter.format(order.shippingPrice)}
              </p>
            </span>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-bold text-gray-800 text-lg">VAT</p>
              <p className="ml-auto">{NairaFormatter.format(order.taxPrice)}</p>
            </span>
          </span>
          <span className=" flex w-full pl-4 py-4 border-b">
            <span className="flex w-[300px]">
              <p className=" font-bold text-gray-800 text-lg">Total</p>
              <p className="ml-auto">
                {NairaFormatter.format(order.totalPrice)}
              </p>
            </span>
          </span>
          <span>
            {!order.isPaid ? (
              <span>
                <p className=" bg-red-200 px-3 py-1 w-fit mb-2">Not paid</p>
                <span className=" flex w-full  py-4  justify-center items-center">
                  {paymentLoading ? (
                    <Loader size="40" />
                  ) : (
                    <p className="flex cursor-pointer" onClick={handlePayment}>
                      pay{" "}
                    </p>
                  )}
                </span>
              </span>
            ) : (
              <p className="px-3 py-1 bg-green-200 w-fit">Paid</p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
