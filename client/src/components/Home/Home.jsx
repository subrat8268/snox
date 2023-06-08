// import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import { useGetAllProductsQuery } from "../../state/api";

const Home = () => {

  const { data, isLoading } = useGetAllProductsQuery();
  
  // console.log("product data",data)

  if (isLoading) {
    return (
      <div className="home-container">Loading ...</div>
    )
  }

  return (
    <div>
      <Banner />
      <div className="main-content" id="category">
        <div className="layout" >
          <Products products={data} headingText="Popular Products" />
        </div>
      </div>
    </div>
  );
};


export default Home;
