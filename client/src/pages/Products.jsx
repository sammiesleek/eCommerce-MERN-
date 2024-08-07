import { Right } from "@icon-park/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import Loader from "../components/Loader";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "animate.css";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";
const Products = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="flex h-[350px] bg-[#f2f2f2] items-end justify-center pb-10">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-5xl text-center">Products</h1>
          <span className="flex">
            <span className="flex justify-center items-center">
              <Link className="text-black font-semibold" to="/">
                Home
              </Link>
              <Right
                className="text-[#999]"
                theme="outline"
                size="20"
                strokeWidth={3}
              />
            </span>
            <p>products</p>
          </span>
        </div>
      </div>
      <div className=" max-w-[700px] mx-auto  py-10">
        <Swiper
          className="!mx-auto "
          modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y, Virtual]}
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}

          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-fit">
              <div className="flex w-[100px] h-[100px] rounded-full border-2 border-[#CEA384]">
                <img className="rounded-full" src="/images/bg6.jpg" alt="" />
              </div>
              <p className="mt-3 font-semibold  text-base">ALL ITEMS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-fit">
              <div className="flex w-[100px] h-[100px] rounded-full border-2 border-[#CEA384]">
                <img className="rounded-full" src="/images/bg6.jpg" alt="" />
              </div>
              <p className="mt-3 font-semibold  text-base">ALL ITEMS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-fit">
              <div className="flex w-[100px] h-[100px] rounded-full border-2 border-[#CEA384]">
                <img className="rounded-full" src="/images/bg6.jpg" alt="" />
              </div>
              <p className="mt-3 font-semibold  text-base">ALL ITEMS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-fit">
              <div className="flex w-[100px] h-[100px] rounded-full border-2 border-[#CEA384]">
                <img className="rounded-full" src="/images/bg6.jpg" alt="" />
              </div>
              <p className="mt-3 font-semibold  text-base">ALL ITEMS</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center w-fit">
              <div className="flex w-[100px] h-[100px] rounded-full border-2 border-[#CEA384]">
                <img className="rounded-full" src="/images/bg6.jpg" alt="" />
              </div>
              <p className="mt-3 font-semibold  text-base">ALL ITEMS</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {isLoading ? (
        <Loader size="100" />
      ) : error ? (
        <h1>{error?.error}</h1>
      ) : (
        <div className="flex flex-wrap">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex w-full md:w-[50%} lg:w-[33%] xl:w-[25%] p-2 h-[300px] bg-red-700"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
