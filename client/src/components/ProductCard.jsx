import { Eyes, Like, MallBag } from "@icon-park/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { addToCart } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { NairaFormatter } from "../utils/cartUtils";
const ProductCard = ({ product }) => {
  const distpatch = useDispatch();
  const addToCartHandler = () => {
    distpatch(addToCart({ ...product, qty: 1 }));
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center product_card">
        <div className="flex relative">
          <Link to={`/products/${product._id}`}>
            <img src={JSON.parse(product.image)[0]} alt="" />
          </Link>
          <span className="flex flex-col gap-y-4 absolute bottom-10  product_action ">
            <MallBag
              className="flex cursor-pointer"
              theme="outline"
              size="24"
              fill="#333"
              onClick={() => addToCartHandler()}
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
          <Link
            to={`/products/${product._id}`}
            className="font-semibold text-xl"
          >
            {product.name}
          </Link>
          <p className="font-bold  text-[#CEA384]">
            {NairaFormatter.format(product.price)}
          </p>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.element.isRequired,
};
