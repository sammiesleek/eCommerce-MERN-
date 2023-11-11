import Explore from "../components/Explore";
import Herosection from "../components/Herosection";
import ProductSection from "../components/ProductSection";
import SubHero from "../components/SubHero";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const headers = {
          "Content-Type": "application/json",
          //  "Api-Key": apiKey,
          // Add any other headers as needed
        };
        const { data } = await axios.get(`http://localhost:5000/api/products`, {
          headers: headers,
        });
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className=" ">
      <Herosection />
      <SubHero />
      <ProductSection products={products} title={"New Arrivals"} />
      <Explore />
      <ProductSection products={products} title={"Best Selling"} />
    </div>
  );
};

export default HomePage;
