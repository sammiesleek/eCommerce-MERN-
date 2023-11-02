import { Left, Right } from "@icon-park/react";
import { Swiper, SwiperSlide } from "swiper/react";

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

const Explore = () => {
  return (
    <div className="flex mt-20">
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
          <div className="flex my-10 max-w-[1400px] mx-auto flex-wrap gap-y-10 ">
            <div className="flex w-full lg:w-[40%]">
              <img src="/images/bg20.jpg" alt="" />
            </div>
            <div className="flex w-full lg:w-[60%]   lg:pl-40 flex-col justify-center gap-y-20">
              <div className="flex flex-col">
                <h1 className="text-black font-semibold text-3xl ">
                  Heidi Handheld Bag{" "}
                </h1>
                <p className="my-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi odio voluptates quisquam incidunt ullam mollitia
                  laborum in voluptatum amet, obcaecati facilis perspiciatis
                  velit voluptatibus iste. Deleniti officiis veniam soluta
                  inventore. Aut aliquam id optio obcaecati, veritatis nobis ab
                  architecto eligendi.
                </p>

                <button className="mb-0 bg-transparent text-black hover:text-white hover:bg-[#CEA384] h-fit w-fit py-3 px-5 border border-black hover:border-transparent">
                  View Collection
                </button>
              </div>
              <div className="flex w-full flex-row justify-between ">
                <span className="flex  gap-x-5">
                  <Left
                    className="p-3 border border-black  flex justify-center items-center  hover:bg-[black] hover:border-transparent hover:text-white"
                    theme="outline"
                    size="26"
                    strokeWidth={2}
                  />
                  <Right
                    className="p-3 border border-black ease-in-out  flex justify-center items-center  hover:bg-[black] hover:border-transparent hover:text-white"
                    theme="outline"
                    size="26"
                    strokeWidth={2}
                  />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex my-10 max-w-[1400px] mx-auto flex-wrap gap-y-10 ">
            <div className="flex w-full lg:w-[40%]">
              <img src="/images/bg24.jpg" alt="" />
            </div>
            <div className="flex w-full lg:w-[60%]   lg:pl-40 flex-col justify-center gap-y-20">
              <div className="flex flex-col">
                <h1 className="text-black font-semibold text-3xl ">
                  Heidi Handheld Bag{" "}
                </h1>
                <p className="my-6">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Excepturi odio voluptates quisquam incidunt ullam mollitia
                  laborum in voluptatum amet, obcaecati facilis perspiciatis
                  velit voluptatibus iste. Deleniti officiis veniam soluta
                  inventore. Aut aliquam id optio obcaecati, veritatis nobis ab
                  architecto eligendi.
                </p>

                <button className="mb-0 bg-transparent text-black hover:text-white hover:bg-[#CEA384] h-fit w-fit py-3 px-5 border border-black hover:border-transparent">
                  View Collection
                </button>
              </div>
              <div className="flex w-full flex-row justify-between ">
                <span className="flex  gap-x-5">
                  <Left
                    className="p-3 border border-black  flex justify-center items-center  hover:bg-[black] hover:border-transparent hover:text-white"
                    theme="outline"
                    size="26"
                    strokeWidth={2}
                  />
                  <Right
                    className="p-3 border border-black ease-in-out  flex justify-center items-center  hover:bg-[black] hover:border-transparent hover:text-white"
                    theme="outline"
                    size="26"
                    strokeWidth={2}
                  />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Explore;
