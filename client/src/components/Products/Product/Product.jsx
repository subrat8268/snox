import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={data.photo} alt="product img"
        />
      </div>
      <div className="prod-details">
        <span className="name">{data.title}</span>
        {/* <span className="price">Rs.499</span> */}
      </div>
    </div>
  );
};

export default Product;
