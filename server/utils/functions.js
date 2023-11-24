// verify payment
export const verifyPaystackPayment = async (paymentId) => {
  const url = `https://api.paystack.co/transaction/verify/${paymentId}`;
  const options = {
    method: "GET",
    headers: {
      Authorization: "Bearer sk_test_b8f2de1eb14c9c20334641b549ceead6a8a92f63",
    },
  };

  try {
    const paystackResponse = await fetch(url, options);
    const jsonResponse = await paystackResponse.json();

    return jsonResponse;
  } catch (error) {
    console.error("Error verifying payment:", error);
    throw error;
  }
};
