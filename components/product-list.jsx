"use client";

import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const ProductList = ({ items, title }) => {

  return (
    <div className="space-y-5 sm:space-y-12">
      <h3 className="text-lg font-semibold text-center sm:text-3xl sm:text-left">
        {title}
      </h3>
      {items?.length === 0 && <NoResults />}
      <div className="relative mx-0">
        <Swiper
          style={{ width: "100%", height: "100%" }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 15,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {items?.data?.map((item) => (
            <SwiperSlide
              style={{ boxSizing: "border-box", maxWidth: "350px" }}
              key={item.id}
            >
              <ProductCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductList;
