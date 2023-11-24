export function paystackScript() {
  const src = "https://js.paystack.co/v1/inline.js";
  return new Promise(function (resolve, reject) {
    var script = document.createElement("script");
    script.src = src;
    script.addEventListener("load", function () {
      resolve();
    });
    script.addEventListener("error", function (e) {
      reject(e);
    });
    document.body.appendChild(script);
  });
}

export const makePayment = (
  orderId,
  amount,
  callbackFunction,
  onCloseFunction
) => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  let date = new Date();
  let ref = orderId;
  let handler = window.PaystackPop.setup({
    key: "pk_test_ca26bcedef80cba1f681a219817361c6d2406521",
    email: user.email,
    amount: parseInt(amount),
    firstname: user.firstName,
    lastname: user.lastName,
    ref: date.getTime(),
    callback: callbackFunction,
    onClose: onCloseFunction,
  });
  handler.openIframe();
};
