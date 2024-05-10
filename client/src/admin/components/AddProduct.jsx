import { Close } from "@icon-park/react";
import { useContext, useState } from "react";
import { AppStateContext } from "../../ContextApi/AppStateContext";

const AddProduct = () => {
  const { setAddProduct } = useContext(AppStateContext);

  const [formData, setFormData] = useState({
    title: "",
    category: "Category",
    price: "",
    quantity: "",
    desc: "",
    images: "",
  });

  const handleChange = (e) => {
    if (e.target.type === "file") {
      //  setImages(e.target.files);

      setFormData((prevState) => ({
        ...prevState,
        ["images"]: e.target.files,
      }));

      // const filesArray = Array.form(e.target.files);
      // setFormData((prevState) => ({
      //   ...prevState,
      //   [e.target.name]: filesArray,
      // }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // try {
    //   dispatch(saveShippindAddress(formData));

    //   const res = await createOrder({
    //     orderItems: cartItems,
    //     shippingAddress,
    //     paymentMethod: "online",
    //     itemsPrice: itemsPrice,
    //     taxPrice: taxPrice,
    //     shippingPrice: shippingPrice,
    //     totalPrice: totalPice,
    //   }).unwrap();
    //   navigate(`/tracking/${res._id}`);

    //   setTimeout(() => {
    //     dispatch(clearCartItems());
    //   }, 200);
    // } catch (error) {
    //   toast.error(error);
    // }
  };

  return (
    <div className="overflow-y-scroll">
      <div className="flex bg-light-bgHeavy  ovr w-full justify-between p-5 h-fit">
        <span className="flex flex-col">
          <p className="font-semibold text-xl text-light-textPrimary">
            Add Product
          </p>
          <p className="font-normal text-sm text-light-textPrimary">
            Add Product and neccessary informations here
          </p>
        </span>
        <span
          onClick={() => setAddProduct(false)}
          className="flex rounded-full bg-white h-10 justify-center items-center w-10 shadow-sm hover:rotate-[180deg] transition-all ease-linear"
        >
          <Close
            className="cursor-pointer text-light-textPrimary"
            theme="outline"
            size="20"
            strokeWidth={7}
          />
        </span>
      </div>
      <div className="flex w-full h-full overflow-x-scroll pt-5">
        <div className="flex w-full px-5">
          <form
            action=""
            // onSubmit={handleSubmit}
            className="flex flex-col w-full gap-y-5"
          >
            <div className="flex w-full  ">
              <p className=" hidden sm:block text-light-textPrimary text-base font-semibold">
                Product&apos;s Name
              </p>
              <input
                className="w-[70%] ml-auto   rounded-md border-gray-500 border py-3 focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-green-900"
                type="text"
                placeholder="Product's Name/ Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="flex w-full ">
              <p className=" hidden sm:block text-light-textPrimary text-base font-semibold">
                Product&apos;s Category
              </p>
              <select
                className="bg-[#f2f4f6] block  w-[70%] ml-auto  px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-md  focus:ring-transparent focus:border-[#1FA076]"
                name="Category"
                onChange={handleChange}
              >
                <option
                  className="active:bg-green-700 flex hover:bg-red-900 hover:text-red-300"
                  selected
                >
                  {/* {formData.category} */}
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="flex">
              <p className=" hidden sm:block text-light-textPrimary text-base font-semibold">
                Product&apos;s Price
              </p>
              <input
                className="w-[70%] ml-auto  rounded-md  py-3 border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-green-900"
                type="number"
                placeholder="Product's Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <p className=" hidden sm:block text-light-textPrimary text-base font-semibold">
                {" "}
                Product&apos;s Quantity
              </p>
              <input
                className="w-[70%] ml-auto py-3   rounded-md border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-green-900"
                type="number"
                placeholder="Product's Count"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
            </div>
            <div className="flex">
              <p className=" hidden sm:block text-light-textPrimary text-base font-semibold">
                {" "}
                Product&apos;s Description
              </p>
              <textarea
                className="w-[70%] ml-auto p-4  rounded-md  border-gray-500 border  focus:border-[#1FA076] focus:outline-transparent focus:ring-transparent placeholder:text-green-900"
                placeholder="Product Description"
                rows={5}
                name="desc"
                value={formData.desc}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-wrap items-center gap-y-4 justify-between w-full relative ">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center  w-[49%] h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50   hover:bg-gray-100 "
              >
                <div className="flex flex-col items-center   justify-center pt-2 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  type="file"
                  className="absolute flex w-full h-full opacity-0"
                  multiple
                  name="images"
                  value={formData.images}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="flex justify-end z-40">
              <input
                className="bg-[#1FA076] px-10 py-3 font-bold text-lg  text-white rounded-sm cursor-pointer hover:bg-gray-800"
                type="submit"
                value="Add Product"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
