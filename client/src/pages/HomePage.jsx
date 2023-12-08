import Explore from "../components/Explore";
import Herosection from "../components/Herosection";
import Loader from "../components/Loader";
import ProductSection from "../components/ProductSection";
import SubHero from "../components/SubHero";
import { useGetProductsQuery } from "../slices/productsApiSlice.js";

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

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
