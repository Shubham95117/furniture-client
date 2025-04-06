import React from "react";
import banner from "../assets/banner.webp";
import "./styles/Banner.css";
const Banner = () => {
  return (
    <div>
      <img src={banner} alt="banner-img" className="banner-image" />
    </div>
  );
};

export default Banner;
