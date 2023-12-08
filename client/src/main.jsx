import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./assets/bootstrap/bootstrap.css";
import { ContextProvider } from "./ContextApi/AppStateContext.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Product from "./pages/Product.jsx";
import OrderSummary from "./pages/OrderSummary.jsx";
import TrackOrder from "./pages/TrackOrder.jsx";
import Products from "./pages/Products.jsx";
import { Products as ProductList } from "./admin/pages/Products.jsx";
import store from "../store.js";
import { Provider } from "react-redux";
import Dashboard from "./admin/pages/Dashboard.jsx";
import Orders from "./admin/pages/Orders.jsx";
import Customers from "./admin/pages/Customers.jsx";
import Settings from "./admin/pages/Settings.jsx";
import Categories from "./admin/pages/Categories.jsx";
import AdminRoute from "./admin/components/AdminRoute.jsx";
import ShoppingCart from "./pages/ShoppingCart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index exact element={<HomePage />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/products/:id" exact element={<Product />} />
        <Route path="/cart" exact element={<ShoppingCart />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/register" exact element={<Login />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/shipping" exact element={<OrderSummary />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/tracking/:id" exact element={<TrackOrder />} />
        </Route>
      </Route>
      <Route path="/admin" element={<AdminRoute />}>
        <Route index exact element={<Dashboard />} />
        <Route path="/admin/orders" exact element={<Orders />} />
        <Route path="/admin/products" exact element={<ProductList />} />
        <Route path="/admin/customers" exact element={<Customers />} />
        <Route path="/admin/categories" exact element={<Categories />} />
        <Route path="/admin/settings" exact element={<Settings />} />
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
