export const addDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  //   /calculatting items price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  //   calculating shipping price (free is order is above 50)
  state.shippingPrice = addDecimals(state.itemsPrice > 50 ? 0 : 10);

  //   tax price
  state.taxPrice = addDecimals(Number(0.1 * state.itemsPrice).toFixed(2));

  //   total price
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice)
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));
  return state;
};

export var NairaFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
});
