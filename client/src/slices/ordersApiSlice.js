import { apiSlice } from "./apiSlice.js";

import { ORDERS_URL, PAYPAL_URL } from "../constants.js";

export const ordersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: { ...order },
      }),
    }),
    getOrderDetails: builder.query({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    // payOrder: builder.mutation({
    //   query: ({ orderId, details }) => ({
    //     url: `${PAYPAL_URL}/${orderId}/pay`,
    //     method: "PUT",
    //     body: { ...details },
    //   }),
    // }),
    confirmPayment: builder.mutation({
      query: (data) => ({
        url: `${ORDERS_URL}/confirmPayment`,
        method: "POST",
        body: { ...data },
      }),
    }),
    getPaypalClientId: builder.query({
      query: () => ({
        url: PAYPAL_URL,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  useConfirmPaymentMutation,
  usePayOrderMutation,
  useGetPaypalClientIdQuery,
} = ordersApiSlice;
