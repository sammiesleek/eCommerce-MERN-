import ProductCard from "./ProductCard";
const ProductSection = ({ title }) => {
  return (
    <div className=" mt-10 max-w-[1400px] mx-auto">
      <div className="flex flex-col">
        <span className="flex justify-center items-center my-10 flex-col ">
          <h1 className="text-5xl font-semibold text-center">{title}</h1>
        </span>
        <div className="flex w-full flex-wrap gap-y-10 ">
          <div className="flex w-[100%] md:w-[50%] lg:w-[25%] md:px-3">
            <ProductCard />
          </div>
          <div className="flex w-[100%] md:w-[50%] lg:w-[25%] md:px-3">
            <ProductCard />
          </div>
          <div className="flex w-[100%] md:w-[50%] lg:w-[25%] md:px-3  ">
            <ProductCard />
          </div>
          <div className="flex w-[100%] md:w-[50%] lg:w-[25%] md:px-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
