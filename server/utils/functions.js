// verify payment
export const verifyPaystackPayment = async (paymentId) => {
  const url = `https://api.paystack.co/transaction/verify/${paymentId}`;
  const options = {
    method: "GET",
    headers: {
      Authorization: process.env.EXPRESS_APP_PAYSTACK_KEY,
    },
  };

  try {
    const paystackResponse = await fetch(url, options);
    const jsonResponse = await paystackResponse.json();

    return jsonResponse.data;
  } catch (error) {
    console.error("Error verifying payment:", error);
    throw error;
  }
};
