import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";
import ShoppingCart from "./pages/ShoppingCart";
import OrderSummary from "./pages/OrderSummary";
import TrackOrder from "./pages/TrackOrder";
import Dashboard from "./admin/pages/Dashboard";

function App() {
  return (
    <>
      <Header />

      <Outlet>
        <Dashboard />
      </Outlet>
      {/* 
      <Route path="/" exact element={<HomePage />} />
      <Route path="/products" exact element={<Products />} />
      */}

      <Footer />
    </>
  );
}

export default App;
//  <Routes>

{
  /* <Route path="/products/:id" element={<Productpage />} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />
   <Route exact path="/cart/:id?" element={<Cart />} />
 </Routes>; */
}
