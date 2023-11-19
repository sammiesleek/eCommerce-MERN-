import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./src/slices/apiSlice";
import cartSlice from "./src/slices/cartSlice";
import authSlice from "./src/slices/authSlice";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
export default store;
