// src/components/Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules"; // Import Autoplay alongside other modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import images
import slider1 from "../assets/slider/slider.webp";
import slider2 from "../assets/slider/slider2.webp";
import slider3 from "../assets/slider/slider3.webp";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1} // Showing one slide per view for clear sliding
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay with a 3-second delay
    >
      <SwiperSlide>
        <img
          src={slider1}
          alt="Slide 1"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider2}
          alt="Slide 2"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={slider3}
          alt="Slide 3"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      {/* Add more SwiperSlides as needed */}
    </Swiper>
  );
};

export default Slider;
