import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import products from "../data/products";
const ProductSection = ({ title }) => {
  return (
    <div className=" mt-10 max-w-[1400px] mx-auto">
      <div className="flex flex-col">
        <span className="flex justify-center items-center my-10 flex-col ">
          <h1 className="text-5xl font-semibold text-center">{title}</h1>
        </span>
        <div className="flex w-full flex-wrap gap-y-10 ">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex w-[100%] md:w-[50%] lg:w-[25%] md:px-3"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
ProductSection.propTypes = {
  title: PropTypes.element.isRequired,
};
