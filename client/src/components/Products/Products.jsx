import "./Products.scss";
import Product from "./Product/Product";
import { useState } from "react";

const Products = ({ products, innerPage, headingText }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory ?? selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;

  const getAllProduct = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">Products</div>}
      <div className="alert">
        <p>*Click On Any Category Below To Find Your Products</p>
      </div>
      <div className="category">
        <button
          className="btn"
          onClick={() => handleCategoryClick("triclover valve")}
        >
          triclover valve
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("triclover fittings")}
        >
          triclover fittings
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("stainless steels")}
        >
          stainless steels
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("stainless steel dairy fittings")}
        >
          stainless steel dairy fittings
        </button>
        <button className="btn" onClick={() => handleCategoryClick("fittings")}>
          fittings
        </button>
        <button className="btn" onClick={getAllProduct}>
          All Products
        </button>
      </div>

      <div className="products">
        {filteredProducts?.map((item) => (
          <Product key={item._id} id={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
