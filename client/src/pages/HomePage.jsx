import Explore from "../components/Explore";
import Herosection from "../components/Herosection";
import Loader from "../components/Loader";
import ProductSection from "../components/ProductSection";
import SubHero from "../components/SubHero";
import axios from "axios";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";
import { useGoogleAuthQuery } from "../slices/usersApiSlice";

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  const handleGoogleLogin = async () => {
    // Redirect to a new URL
    window.location.href = "http://localhost:5000/auth/google";

    // try {
    //   const response = await axios.get(
    //     "http://localhost:3000/auth/google/callback"
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  handleGoogleLogin();

  return (
    <div className=" ">
      <Herosection />
      <SubHero />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <h1>{error?.data?.message}</h1>
      ) : (
        <ProductSection products={products} title={"New Arrivals"} />
      )}
      <Explore />
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : error ? (
        <h1>{error?.data?.message}</h1>
      ) : (
        <ProductSection products={products} title={"Best Selling"} />
      )}
    </div>
  );
};

export default HomePage;
