import { Minus, Plus } from "@icon-park/react";
import { useContext } from "react";
import PropTypes from "prop-types";
import { AppStateContext } from "../ContextApi/AppStateContext";

const ProductQty = ({ product }) => {
  const { qty, setQty } = useContext(AppStateContext);

  const incCart = () => {
    if (qty < product.countInStock) {
      setQty(qty + 1);
    } else {
      return;
    }
  };
  const decCart = () => {
    if (qty > 1) {
      setQty(qty - 1);
    } else {
      return;
    }
  };
  const changeInput = (e) => {
    if (e.currentTarget.value === "") {
      setQty(0);
    } else {
      const input = e.currentTarget.value.replace(/\D/g, "");

      const limitedValue = Math.min(parseInt(input, 10), product.countInStock);
      console.log(limitedValue);
      setQty(parseInt(limitedValue));
    }
  };
  return (
    <div className="flex border-2 border-black w-[105px] h-[54px] ">
      <span className="flex justify-center items-center w-1/2 border-r border-r-black text-lg font-extrabold">
        <input
          className="pl-4 bg-transparent  w-full h-full flex justify-center items-center border-none focus:outline-none "
          type="text"
          value={qty}
          onChange={(e) => changeInput(e)}
        />
      </span>
      <span className="flex flex-col w-1/2">
        <span
          style={{ userSelect: "none" }}
          onClick={() => incCart()}
          className="h-1/2 w-full  flex justify-center items-center border-b  border-b-black cursor-pointer"
        >
          <Plus
            className=" hover:text-[#CEA384] "
            theme="filled"
            size="22"
            strokeWidth={5}
          />
        </span>
        <span
          style={{ userSelect: "none" }}
          onClick={() => decCart()}
          className="h-1/2 w-full flex justify-center items-center cursor-pointer"
        >
          <Minus
            className=" hover:text-[#CEA384] "
            theme="filled"
            size="22"
            strokeWidth={5}
          />
        </span>
      </span>
    </div>
  );
};

export default ProductQty;

ProductQty.propTypes = {
  product: PropTypes.element.isRequired,
};
