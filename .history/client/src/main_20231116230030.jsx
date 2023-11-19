import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./ContextApi/AppStateContext.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Product from "./pages/Product.jsx";
import { ShoppingCart } from "@icon-park/react";
import OrderSummary from "./pages/OrderSummary.jsx";
import TrackOrder from "./pages/TrackOrder.jsx";
import Products from "./pages/Products.jsx";
import store from "../store.js";
import { Provider } from "react-redux";
import Dashboard from "./admin/pages/Dashboard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Layout from "./admin/Layout.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index={true} element={<HomePage />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/products/:id" exact element={<Product />} />
        <Route path="/cart" exact element={<ShoppingCart />} />
        <Route path="/shipping" exact element={<OrderSummary />} />
        <Route path="/tracking" exact element={<TrackOrder />} />
      </Route>
      <Route path="" element={<PrivateRoute />}>
        <Route path="/admin" element={<Layout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
