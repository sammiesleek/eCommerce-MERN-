import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

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

const Herosection = () => {
  return (
    <div className="flex min-h-screen lg:h-screen w-full bg-[#f9f4f0] pt-28 hero_section">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y, Virtual]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}

        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="flex flex-wrap mx-auto max-w-[1200px]  gap-y-5 items-center">
            <div className="flex w-full lg:w-1/2  h-fit justify-center slide_text  animate__animated  animate__slideInLeft ">
              <div className="flex flex-col w-fit  justify-center items-center  lg:items-start px-3">
                <span className=" animate__bounce tag font-bold text-base text-[#333] mb-10">
                  {" "}
                  STYLE DESTINATION{" "}
                </span>
                <p className="text-center lg:text-left text-5xl lg:text-9xl font-bold  lg:ml-[-7px]">
                  Basic Collection
                </p>
                <p className="text-base font-medium text-center lg:text-left mt-4  animate__slideInLeft">
                  In a world of hyper-convinience and over comsumption we want
                  to strip away complexity from your everyday
                </p>

                <Link
                  to="/products"
                  className="px-6 font-medium py-3 border border-black mt-20 hover:border-transparent hover:bg-white ease-in-out"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="flex  w-full h-fit lg:w-1/2 justify-center slide_image  animate__animated  animate__slideInRight">
              <div className="flex  imgt animate__slideInRight ">
                <img src="/images/bg17.jpg" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap mx-auto max-w-[1200px]  gap-y-5 items-center">
            <div className="flex w-full lg:w-1/2  h-fit justify-center slide_text  animate__animated  animate__slideInLeft ">
              <div className="flex flex-col w-fit  justify-center items-center  lg:items-start px-3">
                <span className=" animate__bounce tag font-bold text-base text-[#333] mb-10">
                  {" "}
                  STYLE DESTINATION{" "}
                </span>
                <p className="text-center lg:text-left text-5xl lg:text-9xl font-bold  lg:ml-[-7px]">
                  Basic Collection
                </p>
                <p className="text-base font-medium text-center lg:text-left mt-4  animate__slideInLeft">
                  In a world of hyper-convinience and over comsumption we want
                  to strip away complexity from your everyday
                </p>

                <Link
                  to="/products"
                  className="px-6 font-medium py-3 border border-black mt-20 hover:border-transparent hover:bg-white ease-in-out"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="flex  w-full h-fit lg:w-1/2 justify-center slide_image  animate__animated  animate__slideInRight">
              <div className="flex  imgt animate__slideInRight ">
                <img src="/images/hero1.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-wrap mx-auto max-w-[1200px]  gap-y-5 items-center">
            <div className="flex w-full lg:w-1/2  h-fit justify-center slide_text  animate__animated  animate__slideInLeft ">
              <div className="flex flex-col w-fit  justify-center items-center  lg:items-start px-3">
                <span className=" animate__bounce tag font-bold text-base text-[#333] mb-10">
                  {" "}
                  STYLE DESTINATION{" "}
                </span>
                <p className="text-center lg:text-left text-5xl lg:text-9xl font-bold  lg:ml-[-7px]">
                  Basic Collection
                </p>
                <p className="text-base font-medium text-center lg:text-left mt-4  animate__slideInLeft">
                  In a world of hyper-convinience and over comsumption we want
                  to strip away complexity from your everyday
                </p>

                <Link
                  to="/products"
                  className="px-6 font-medium py-3 border border-black mt-20 hover:border-transparent hover:bg-white ease-in-out"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="flex  w-full h-fit lg:w-1/2 justify-center slide_image  animate__animated  animate__slideInRight">
              <div className="flex  imgt animate__slideInRight ">
                <img src="/images/hero2.png" alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <div className="flex flex-wrap mx-auto max-w-[1200px]  gap-y-5 items-center">
        <div className="flex w-full lg:w-1/2  h-fit justify-center ">
          <div className="flex flex-col w-fit  justify-center items-center  lg:items-start px-3">
            <span className="font-bold text-base text-[#333] mb-10">
              {" "}
              STYLE DESTINATION{" "}
            </span>
            <p className="text-center lg:text-left text-5xl lg:text-9xl font-bold  lg:ml-[-7px]">
              Basic Collection
            </p>
            <p className="text-base font-medium text-center lg:text-left mt-4">
              In a world of hyper-convinience and over comsumption we want to
              strip away complexity from your everyday
            </p>

            <button className="px-6 font-medium py-3 border border-black mt-20 hover:border-transparent hover:bg-white ease-in-out">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="flex  w-full h-fit lg:w-1/2 justify-center">
          <div className="flex ">
            <img src="/images/hero1.png" alt="" />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Herosection;
