"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import arrow from "../../public/arrow.png"
import "swiper/css";
import PopularTopicsCard from "./PopularTopicsCard";
// register Swiper custom elements
const PopularTopics = () => {
  const ref = useRef();
  const handleNext = () => {
    ref.current.swiper.slideNext();
  };
  const handlePrev = () => {
    ref.current.swiper.slidePrev();
  };
  return (
    <div className="w-full px-10 text-white">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[25px] font-extrabold">Popular Topics 🔥</h1>
        <div className="flex gap-2">
          <button onClick={handlePrev} className="rounded border border-[#425568] p-4 font-extrabold"><Image src={arrow} className=" rotate-180"/></button>
          <button onClick={handleNext} className="rounded border border-[#425568] p-4 font-extrabold"><Image src={arrow}/></button>
        </div>
      </div>

      <Swiper spaceBetween={35} slidesPerView={3} navigation={false} ref={ref}>
        <SwiperSlide>
          <PopularTopicsCard />
        </SwiperSlide>
        <SwiperSlide>
          <PopularTopicsCard />
        </SwiperSlide>
        <SwiperSlide>
          <PopularTopicsCard />
        </SwiperSlide>
        <SwiperSlide>
          <PopularTopicsCard />
        </SwiperSlide>
        <SwiperSlide>
          <PopularTopicsCard />
        </SwiperSlide>
        <SwiperSlide>
          <PopularTopicsCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularTopics;
