import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import sj from "../../assets/sj.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            SNOX &#169; Copyright 2023. All Right Reserved
          </span>
          <div className="right">
            <img src={sj} alt="" />

            <span className="text">Made By Subrat Jena</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
