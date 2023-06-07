import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../state/api";

const RelatedProducts = ({ category }) => {
  const { data, isLoading } = useGetAllProductsQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="home-container">Loading ...</div>;
  }

  const filteredData = data?.filter((product) => product.category === category);

  const handleClick = (item)=>{
    navigate(`/product/${item._id}`);
  }

  return (
    <div className="related-products">
      {filteredData?.map((item) => (
         <div className="product-card" onClick={handleClick(item)}>
         <div className="thumbnail">
           <img
             src={item?.photo} alt="product img"
           />
         </div>
         <div className="prod-details">
           <span className="name">{item?.title}</span>
           {/* <span className="price">Rs.499</span> */}
         </div>
       </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
