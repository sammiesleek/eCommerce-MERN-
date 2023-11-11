import { Eyes, Like, MallBag } from "@icon-park/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <div className="flex flex-col justify-center items-center product_card">
        <div className="flex relative">
          <img src={product.image} alt="" />
          <span className="flex flex-col gap-y-4 absolute bottom-10  product_action ">
            <MallBag
              className="flex cursor-pointer"
              theme="outline"
              size="24"
              fill="#333"
            />

            <Like
              className="flex cursor-pointer"
              theme="outline"
              size="24"
              fill="#333"
            />
            <Eyes
              className="flex cursor-pointer"
              theme="outline"
              size="24"
              fill="#333"
            />
          </span>
        </div>
        <span className="bg-white w-full flex pt-5 flex-col justify-center items-center">
          <p className="font-semibold text-xl">Kathy Tote Bag</p>
          <p className="font-bold  text-[#CEA384]">$100.00</p>
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.element.isRequired,
};
