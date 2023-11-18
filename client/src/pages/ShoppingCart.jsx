import { Delete, Right } from "@icon-park/react";
import { Link, useNavigate } from "react-router-dom";
// import ProductQty from "../components/ProductQty";
import { useDispatch, useSelector } from "react-redux";
import { NairaFormatter } from "../utils/cartUtils";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const ShoppingCart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const distpatch = useDispatch();
  const navigate = useNavigate();
  const removeFromCartHandler = (id) => {
    distpatch(removeFromCart(id));
  };
  const checkOutHandler = () => {
    navigate("/login?redirect=/shipping");
  };
  const getTotal = () => {
    let totalPrice = 0;
    cartItems.forEach((cart) => {
      let price = parseInt(cart.price) * parseInt(cart.qty);

      totalPrice += price;
    });
    return totalPrice;
  };
  return (
    <div className="pt-[80px]">
      <div className="flex cart_bg h-[200px] w-full ">
        <span className="flex justify-center h-fit p-2 items-center">
          <Link className="text-black font-semibold" to="/">
            Home
          </Link>
          <Right
            className="text-[#999]"
            theme="outline"
            size="20"
            strokeWidth={3}
          />
          <p>Shopping Cart</p>
        </span>
      </div>

      <div className="flex flex-col-reverse max-w-[1400px] mx-auto py-10">
        <div className="relative overflow-x-auto  w-full">
          <table className="w-full  text-left  ">
            <thead className="bg-transparent text-black text-xl border">
              <tr>
                <th className="px-6 py-3 border-r">Product</th>
                <th className="px-6 py-3 border-r flex items-center justify-center">
                  <span className="flex h-full w-full items-center justify-center">
                    Price
                  </span>
                </th>
                <th className="px-6 py-3 border-r items-center justify-center">
                  <span className="flex h-full w-full items-center justify-center">
                    Quantity
                  </span>
                </th>
                <th className="px-6 py-3 border-r items-center justify-center">
                  <span className="flex h-full w-full items-center justify-center">
                    Total
                  </span>
                </th>
                <th className="px-6 py-3 items-center justify-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((cart, index) => (
                <tr key={index} className="bg-white border-b  text-black">
                  <th
                    scope="row"
                    className="px-6 py-4 text-black  min-w-[300px] border-r"
                  >
                    <span className="flex items-center gap-x-4 w-fit">
                      <img src={cart.image} alt="" className="w-28 " />
                      {cart.name}
                    </span>
                  </th>
                  <td className="px-6 py-4 font-bold text-bold border-r ">
                    <span className="flex h-full w-full items-center justify-center">
                      {NairaFormatter.format(cart.price)}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-bold border-r ">
                    <div className="span w-full h-full flex justify-center items-center">
                      {/* <ProductQty product={product} /> */}
                      {cart.qty}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-bold border-r">
                    <span className="flex h-full w-full items-center justify-center">
                      {NairaFormatter.format(
                        parseInt(cart.price) * parseInt(cart.qty)
                      )}
                    </span>
                  </td>

                  <td className="px-6 py-4 font-bold text-bold border-r text-black hover:text-[#CEA384] ">
                    <span className="flex h-full w-full items-center justify-center cursor-pointer">
                      <Delete
                        onClick={() => {
                          removeFromCartHandler(cart._id);
                        }}
                        theme="outline"
                        size="24"
                        strokeWidth={3}
                      />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col mt-20 border p-10">
            <span className="  flex justify-between   md:max-w-[500px] mb-10 border-b pb-10">
              <p className="font-lg text-black text-xl">CART TOTALS</p>{" "}
              <p className="font-bold text-lg text-black">
                {NairaFormatter.format(getTotal())}
              </p>
            </span>
            <button
              style={{ letterSpacing: "2px" }}
              className=" px-10 flex justify-center items-center h-[54px] hover:bg-[#CEA384] bg-black text-white transition-all ease-linear font-semibold w-fit"
              onClick={() => checkOutHandler()}
            >
              PROCEEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
