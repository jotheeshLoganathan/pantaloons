import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdLocalShipping } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { RiListRadio } from "react-icons/ri";
import "./footer.css";
import Footcontent from "./Footcontent";
import Imageapp from "../image/app-store-png-logo-33115.png";

const Footer = () => {
  return (
    <>
    <div className="foot">
      <div className="container">
        <RiCustomerService2Fill className="foot-icon" />
        <MdLocalShipping className="foot-icon" />
        <TbTruckReturn className="foot-icon" />
        <BsCashCoin className="foot-icon" />
        <BsCreditCard className="foot-icon" />
        <RiListRadio className="foot-icon" />
        <div className="foot-txt">
          <ul>
            <li>1800-103-7527</li>
            <li className="txt1">FREE SHIPPING</li>
            <li>EASY RETURNS</li>
            <li>CASH ON DELIVERY</li>
            <li>SECURE PAYMENT</li>
            <li>FREE ALTERATIONS</li>
          </ul>
        </div>
      </div>
    </div>

    <Footcontent/>
    <div className="abc">
      <div className="text-body-secondary">
        EXPERIENCE PANTALOONS APP
      </div>
      <div className="foot-im">
        <img src={Imageapp} alt="img"/>
      </div>
    </div>
  </>
  );
};

export default Footer;
