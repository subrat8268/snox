import { useNavigate } from "react-router-dom";
import "./Category.scss";



const Category = ({ innerPage, headingText, categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      {!innerPage && <div className="sec-heading">Categories</div>}
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
