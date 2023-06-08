import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
// import BannerImg from "../../../assets/banner-img.png";
// import BannerImg1 from "../../../assets/slider1.jpg";
// import BannerImg2 from "../../../assets/slider2.jpg";
// import BannerImg3 from "../../../assets/slider3.jpg";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Banner = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    lazyLoad: true,
  };
  return (
    <div className="hero-banner">
      <div className="content">
        <div id="slider">
          <Slider {...settings}>
            <div className="slide">
              <img src="https://ik.imagekit.io/ztj3g4gzm/slider1.d33ef36fdec41801daaf.jpg?updatedAt=1686256033585" loading="lazy" alt="Banner" />
            </div>

            <div className="slide">
              <img src="https://ik.imagekit.io/ztj3g4gzm/slider2.4ae886004619a83f9646.jpg?updatedAt=1686256034896" loading="lazy" alt="Banner" />
            </div>

            <div className="slide">
              <img src="https://ik.imagekit.io/ztj3g4gzm/slider3.9a3fda89c5b7980b5073.jpg?updatedAt=1686256034401" loading="lazy" alt="Banner" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
