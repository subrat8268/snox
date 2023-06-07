import "./Products.scss";
import Product from "./Product/Product";
import { useState } from "react";

const Products = ({ products, innerPage, headingText }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const getAllProduct = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">Products</div>}

      <div className="category">
        <button className="btn" onClick={getAllProduct}>
          <img src="https://firebasestorage.googleapis.com/v0/b/snox-f305b.appspot.com/o/All%20Products.png?alt=media&token=0328b5cf-55ef-45cf-aa12-84146307755f" alt="" />
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("triclover valve")}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/snox-f305b.appspot.com/o/Triclover_Valve_13b49a5750.png?alt=media&token=4c8ba236-f512-465d-a2bf-ef267a35a8a7"
            alt=""
          />
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("triclover fittings")}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/snox-f305b.appspot.com/o/Triclover_Fittings_09bf0eb0ab.png?alt=media&token=5ba52ecb-0237-4c56-9be0-2f5556e876b8"
            alt=""
          />
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("stainless steels")}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/snox-f305b.appspot.com/o/Stainless_Steel_d349bb9927.png?alt=media&token=10fd3209-2602-4a69-b945-5418b2a29781"
            alt=""
          />
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryClick("stainless steel dairy fittings")}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/snox-f305b.appspot.com/o/SS_Dairy_Fittings_dbb374a2de.png?alt=media&token=cc4e75d1-9ccb-448a-9865-ac22a73fda8f"
            alt=""
          />
        </button>
        <button className="btn" onClick={() => handleCategoryClick("fittings")}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/snox-f305b.appspot.com/o/Fittings_ab15d3620b.png?alt=media&token=170d970e-bcbd-4725-b29e-368548e9336b"
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
