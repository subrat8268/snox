import { useNavigate, useParams } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../state/api";
import "./RelatedProducts.scss";

const RelatedProducts = ({ category }) => {
  const { data, isLoading } = useGetAllProductsQuery();
  const navigate = useNavigate();
  const { id } = useParams();

  if (isLoading) {
    return <div className="home-container">Loading ...</div>;
  }

  const filteredData = data
    ?.filter((product) => product.category === category)
    .filter((product) => product._id !== id);
  // const filteredData = data?.filter((product) => product.category === category);

  const handleClick = (item) => {
    navigate(`/product/${item._id}`);
  };

  return (
    <div>
      <h1 className="sec-head">Related Products</h1>
      <div className="related-products">
        {filteredData?.map((item) => (
          <div
            className="product-card"
            key={item._id}
            onClick={() => handleClick(item)}
          >
            <div className="thumbnail">
              <img loading="lazy" src={item?.photo} alt="product img" />
            </div>
            <div className="prod-details">
              <span className="name">{item?.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
