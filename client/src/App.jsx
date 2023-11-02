import Header from "./components/Header";
import {
  BrowserRouter as RouteContainer,
  Routes,
  // Link,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  return (
    <RouteContainer>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/product/:id" exact element={<Product />} />
      </Routes>
      <Footer />
    </RouteContainer>
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
