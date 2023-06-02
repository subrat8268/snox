import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
// import BannerImg from "../../../assets/banner-img.png";
import BannerImg1 from "../../../assets/slider1.jpg";
import BannerImg2 from "../../../assets/slider2.jpg";
import BannerImg3 from "../../../assets/slider3.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Banner = () => {
  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
  };
  return (
    <div className="hero-banner">
      <div className="content">
        {/* <div className="text-content">
          <h1>SALES</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            iusto illum id voluptates doloremque ex aspernatur dicta, corrupti
            molestias tempore?
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div> */}
        <div id="slider">
          <Slider {...settings}>
            <div className="slide">
              <img src={BannerImg1} alt="Banner" />
            </div>

            <div className="slide">
              <img src={BannerImg2} alt="Banner" />
            </div>

            <div className="slide">
              <img src={BannerImg3} alt="Banner" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;
