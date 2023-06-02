import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
import iso9001 from "../../../assets/iso_9001.png";
import iso14001 from "../../../assets/iso_14001.png";
import iso45001 from "../../../assets/iso_45001.png";


const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">SNOX.</span>
        <span className="big-text">We Are Certified Dealer With Best Products</span>
        <div className="iso">
            <img src={iso9001} alt="" />
            <img src={iso14001} alt="" />
            <img src={iso45001} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
