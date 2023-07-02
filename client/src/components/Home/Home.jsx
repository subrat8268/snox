// import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Products from "../Products/Products";
import { useGetAllProductsQuery } from "../../state/api";
import ImageSlider from "./Banner/ImageSlider";

const Home = () => {
  const images = [
    "https://ik.imagekit.io/ztj3g4gzm/slider2__1_.jpg?updatedAt=1688122953329",
    "https://ik.imagekit.io/ztj3g4gzm/tr:h-884,w-1440/slider1.d33ef36fdec41801daaf.jpg?updatedAt=1686256033585",
    "https://ik.imagekit.io/ztj3g4gzm/tr:h-884,w-1440/slider2.4ae886004619a83f9646.jpg?updatedAt=1686256034896",
    "https://ik.imagekit.io/ztj3g4gzm/tr:h-884,w-1440/slider3.9a3fda89c5b7980b5073.jpg?updatedAt=1686256034401",
    "https://ik.imagekit.io/ztj3g4gzm/slider1__1_.jpg?updatedAt=1688122953246",
  ];

  const { data } = useGetAllProductsQuery();

  return (
    <div>
      {/* <Banner /> */}
      <ImageSlider images={images} autoplay={true} />
      <div className="main-content" id="category">
        <div className="layout">
          <Products products={data} headingText="Popular Products" />
        </div>
      </div>
      <div className="about-us-page" id="aboutus">
        <div className="about-us-content overlay">
          <h1>About Us</h1>
          <p>
            Being a manufacturer of the SNOX® of stainless steel sanitary
            valves, fittings, tubing, We manufacture and supply the most
            extensive line of of stainless steel sanitary valves, fittings,
            tubing. We are a company aiming at developing and improving the
            sanitary equipment for dairy, food, cosmetic, beverage, brewing, and
            the pharmaceutical industries. We are highly dedicated to enhancing
            the value and performance of our great products and services to meet
            the requirements of the ever-changing consumer market.
          </p>
          <p>
            SNOX®, is a global sanitary valves manufacturer & supplier, we
            manufacture and supply a full line of stainless steel sanitary
            valves, fittings, tubings, Our products are precision made of type
            304 and 316L stainless steel, they are designed for corrosion
            resistant, highly sanitary conditions in the food processing,
            beverage, dairy, brewing, cosmetic, pharmaceutical and chemical
            industries worldwide. The valves are available with various end
            connections such as sanitary tri-clamp, butt-weld, sanitary thread,
            ​
          </p>
          <p>
            Efficient and reliable product flow is critical to sanitary
            processes, and sanitary valves and valve automation have an
            important impact on performance and profitability. SNOX®, Sanitary
            fittings & valves, FDA approved and meet ASME standards, our
            superior solutions provide optimal flow throughout your process
            ensuring that you get the most out of your raw materials. SNOX®
            mission is to develop and improve sanitary equipment for food,
            dairy, beverage, brewing, cosmetic, and pharmaceutical industries.
            We are dedicated to enhancing the performance and value of our
            products and services to meet your ever-changing requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
