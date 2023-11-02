import { Eyes, Like, MallBag, Search } from "@icon-park/react";

const ProductCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex relative">
        <img src="/images/bg1.jpg" alt="" />
        <span className="flex flex-col gap-y-4 absolute bottom-10 left-5 ">
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
  );
};

export default ProductCard;
