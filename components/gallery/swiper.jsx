"use client";

import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import SwiperImages from "./swiper-images";

const SwiperPanel = ({ images }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto mt-6 lg:max-w-none">
      <Swiper
        style={{
          "--swiper-pagination-color": "#dd6b20",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "4px",
        }}
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {images.stock === 1 && (
          <div className="absolute inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-50 bg-opacity-60">
            <span className="z-50 px-4 py-2 text-lg text-white bg-black rounded-md">
              Jashtë Stokut
            </span>
          </div>
        )}

        {images?.infoimg?.map((img) => (
          <SwiperSlide key={img.id}>
            <SwiperImages image={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperPanel;
