import Explore from "../components/Explore";
import Herosection from "../components/Herosection";
import ProductSection from "../components/ProductSection";
import SubHero from "../components/SubHero";
const HomePage = () => {
  return (
    <div className=" ">
      <Herosection />
      <SubHero />
      <ProductSection title={"New Arrivals"} />
      <Explore />
      <ProductSection title={"Best Selling"} />
    </div>
  );
};

export default HomePage;
