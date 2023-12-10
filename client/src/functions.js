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
  clientId,
  orderId,
  amount,
  callbackFunction,
  onCloseFunction
) => {
  console.log(clientId);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  let handler = window.PaystackPop.setup({
    key: clientId,
    email: user.email,
    amount: amount * 100,
    firstname: user.firstName,
    lastname: user.lastName,
    ref: orderId,
    callback: callbackFunction,
    onClose: onCloseFunction,
  });
  handler.openIframe();
};

import { format } from "date-fns";

export const formatDate = (date) => {
  const newDate = new Date(date);

  const formattedDate = format(newDate, "yyyy-MM-dd HH:mm:ss");

  return formattedDate;
};
