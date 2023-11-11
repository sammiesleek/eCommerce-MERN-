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
import ProductSection from "./components/ProductSection.jsx";
import Product from "./pages/Product.jsx";
import { ShoppingCart } from "@icon-park/react";
import OrderSummary from "./pages/OrderSummary.jsx";
import TrackOrder from "./pages/TrackOrder.jsx";
import Products from "./pages/Products.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/products" exact element={<Products />} />
      <Route path="/products/:id" exact element={<Product />} />
      <Route path="/cart" exact element={<ShoppingCart />} />
      <Route path="/shipping" exact element={<OrderSummary />} />
      <Route path="/tracking" exact element={<TrackOrder />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);
