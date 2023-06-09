// import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Products from "../Products/Products";
import { useGetAllProductsQuery } from "../../state/api";
import ImageSlider from "./Banner/ImageSlider";

const Home = () => {
  const images = [
    'https://ik.imagekit.io/ztj3g4gzm/tr:h-884,w-1440/slider1.d33ef36fdec41801daaf.jpg?updatedAt=1686256033585',
    'https://ik.imagekit.io/ztj3g4gzm/tr:h-884,w-1440/slider2.4ae886004619a83f9646.jpg?updatedAt=1686256034896',
    'https://ik.imagekit.io/ztj3g4gzm/tr:h-884,w-1440/slider3.9a3fda89c5b7980b5073.jpg?updatedAt=1686256034401',
  ];

  const { data, isLoading } = useGetAllProductsQuery();
  
  // console.log("product data",data)

  if (isLoading) {
    return (
      <div className="home-container">Loading ...</div>
    )
  }

  return (
    <div>
      {/* <Banner /> */}
      <ImageSlider images={images} autoplay={true} />
      <div className="main-content" id="category">
        <div className="layout" >
          <Products products={data} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};


export default Home;
