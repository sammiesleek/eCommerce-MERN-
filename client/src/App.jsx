import Header from "./components/Header";

import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StatusAlert from "react-status-alert";
import "react-status-alert/dist/status-alert.css";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <ToastContainer />
      <StatusAlert />
      <Outlet />
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
