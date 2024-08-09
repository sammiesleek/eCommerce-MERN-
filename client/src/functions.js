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
  profile,
  callbackFunction,
  onCloseFunction
) => {
  let handler = window.PaystackPop.setup({
    key: clientId,
    email: profile.email,
    amount: amount * 100,
    firstname: profile.firstName,
    lastname: profile.lastName,
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
