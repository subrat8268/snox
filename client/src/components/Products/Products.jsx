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
        <p>*Click On Any Category To Get The Products</p>
      </div>
      <div className="category">
        <button className="btn" onClick={getAllProduct}>
          <img
            loading="lazy"
            src="https://ik.imagekit.io/ztj3g4gzm/tr:h-200,w-200/CategorySnox/All_Products.png?updatedAt=1686253214552"
            alt=""
          />
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("triclover valve")}
        >
          <img
            loading="lazy"
            src="https://ik.imagekit.io/ztj3g4gzm/tr:h-200,w-200/CategorySnox/Triclover_Valve.png?updatedAt=1686253214388"
            alt=""
          />
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("triclover fittings")}
        >
          <img
            loading="lazy"
            src="https://ik.imagekit.io/ztj3g4gzm/tr:h-200,w-200/CategorySnox/Triclover_Fittings__1_.png?updatedAt=1686253214385"
            alt=""
          />
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("stainless steels")}
        >
          <img
            loading="lazy"
            src="https://ik.imagekit.io/ztj3g4gzm/tr:h-200,w-200/CategorySnox/Stainless_Steel.png?updatedAt=1686253214357"
            alt=""
          />
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("stainless steel dairy fittings")}
        >
          <img
            loading="lazy"
            src="https://ik.imagekit.io/ztj3g4gzm/tr:h-200,w-200/CategorySnox/SS_Dairy_Fittings.png?updatedAt=1686253214353"
            alt=""
          />
        </button>
        <button className="btn" onClick={() => handleCategoryClick("fittings")}>
          <img
            loading="lazy"
            src="https://ik.imagekit.io/ztj3g4gzm/tr:h-500,w-500/CategorySnox/Fittings.png?updatedAt=1686253214584"
            alt=""
          />
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
