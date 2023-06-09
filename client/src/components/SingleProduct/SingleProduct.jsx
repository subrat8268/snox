import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../state/api";

const SingleProduct = () => {
  const { id } = useParams();
  const {data} = useGetProductQuery(id);
  
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                data?.photo
              }
              alt="img"
            />
          </div>
          <div className="right">
            <span className="name">{data?.title}</span>
            <span className="text-bold">
              Category:{' '}
              <span>{data?.category}</span>
            </span>
            <span className="desc">{data?.desc}</span>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={data?._id}
          category={data?.category}
        />
      </div>
    </div>
  );
};

export default SingleProduct;
