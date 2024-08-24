import React from "react";
import Image from "../image/logo_pantaloons.svg";
import "./style.css"; 
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { RiShoppingBag4Line } from "react-icons/ri";
import { useSelector } from "react-redux";




const Navbar = () => {
    const product = useSelector(state => state.cart.cartItems);
    const totalCount = product.reduce((total,item) => total + (item.quantity), 0);
    const totalPrice = product.reduce((total, item) => total + (item.price * item.quantity),0)
  return (
    <div className="aa1">
        
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
          <img src={Image} alt="img"/>
          </Link>
          <div className="mega-menu-content">
                  <div className="menga-menu">
                  <div className='mega'>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>westerwear</li>
                        <li>ethnicwear</li>
                        <li>sopts & Activewear</li>
                        <li>Sleepwear</li>
                        <li>begs,wallets & Clutches</li>
                        <li>footwear</li>
                        <li>accessories</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
           
                    <ul className='p-0'>
                        <li>top wear</li>
                        <li>bottem wear</li>
                        <li>ethnic wear</li>
                        <li>foot wear</li>
                        <li>sopts & Activewear</li>
                        <li>accessories</li>
                        <li>Sleepwear</li>
                        <li>begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>boys topwear</li>
                        <li>babys topwear</li>
                        <li>girls topwear</li>
                        <li>boys bottemwear</li>
                        <li>girls bottemwear</li>
                        <li>babys bottemwear</li>
                        <li>boys footwear</li>
                        <li>girls footwear</li>
                        <li>boys sopts & Activewear</li>
                        <li>girls sopts & Activewear</li>
                        <li>boys accessories</li>
                        <li>girls accessories</li>
                        <li>babies accessories</li>
                        <li>boys Sleepwear</li>
                        <li>girls Sleepwear</li>
                        <li>babys Sleepwear</li>
                        <li>boys begs & backpacks</li>
                        <li>girls begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
             
                    <ul className='p-0'>
                        <li>bath</li>
                        <li>beds </li>
                        <li>decor </li>
                        <li>kitchenware </li>
                        <li>shop by</li>
                        <li>product</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                  
                    <ul className='p-0'>
                        <li>mackup</li>
                        <li>mens fragrances </li>
                        <li>womens fragrances</li>    
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>about us</li>
                        <li>green card  </li>
                        <li>stores locator </li>    
                        <li>payment</li>
                        <li>option</li>
                        <li>investor</li>
                        <li>relation</li>
                    </ul>
                </div>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>tack order</li>
                        <li>FAQs</li>
                        <li>customer support</li>    
                        <li>Return & Exchange</li>
                        <li>policy</li>
                        <li>shipping policy</li>
                    </ul>
                </div>
            </div>
                  </div>
                </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Women">
                  WOMEN
                </Link>
                <div className="mega-menu-content">
                  <div className="menga-menu">
                  <div className='mega'>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>westerwear</li>
                        <li>ethnicwear</li>
                        <li>sopts & Activewear</li>
                        <li>Sleepwear</li>
                        <li>begs,wallets & Clutches</li>
                        <li>footwear</li>
                        <li>accessories</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
           
                    <ul className='p-0'>
                        <li>top wear</li>
                        <li>bottem wear</li>
                        <li>ethnic wear</li>
                        <li>foot wear</li>
                        <li>sopts & Activewear</li>
                        <li>accessories</li>
                        <li>Sleepwear</li>
                        <li>begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>boys topwear</li>
                        <li>babys topwear</li>
                        <li>girls topwear</li>
                        <li>boys bottemwear</li>
                        <li>girls bottemwear</li>
                        <li>babys bottemwear</li>
                        <li>boys footwear</li>
                        <li>girls footwear</li>
                        <li>boys sopts & Activewear</li>
                        <li>girls sopts & Activewear</li>
                        <li>boys accessories</li>
                        <li>girls accessories</li>
                        <li>babies accessories</li>
                        <li>boys Sleepwear</li>
                        <li>girls Sleepwear</li>
                        <li>babys Sleepwear</li>
                        <li>boys begs & backpacks</li>
                        <li>girls begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
             
                    <ul className='p-0'>
                        <li>bath</li>
                        <li>beds </li>
                        <li>decor </li>
                        <li>kitchenware </li>
                        <li>shop by</li>
                        <li>product</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                  
                    <ul className='p-0'>
                        <li>mackup</li>
                        <li>mens fragrances </li>
                        <li>womens fragrances</li>    
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>about us</li>
                        <li>green card  </li>
                        <li>stores locator </li>    
                        <li>payment</li>
                        <li>option</li>
                        <li>investor</li>
                        <li>relation</li>
                    </ul>
                </div>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>tack order</li>
                        <li>FAQs</li>
                        <li>customer support</li>    
                        <li>Return & Exchange</li>
                        <li>policy</li>
                        <li>shipping policy</li>
                    </ul>
                </div>
            </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Mens">
                  MEN
                </Link>
                <div className="mega-menu-content">
                  <div className="menga-menu">
                  <div className='mega'>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>westerwear</li>
                        <li>ethnicwear</li>
                        <li>sopts & Activewear</li>
                        <li>Sleepwear</li>
                        <li>begs,wallets & Clutches</li>
                        <li>footwear</li>
                        <li>accessories</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
           
                    <ul className='p-0'>
                        <li>top wear</li>
                        <li>bottem wear</li>
                        <li>ethnic wear</li>
                        <li>foot wear</li>
                        <li>sopts & Activewear</li>
                        <li>accessories</li>
                        <li>Sleepwear</li>
                        <li>begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>boys topwear</li>
                        <li>babys topwear</li>
                        <li>girls topwear</li>
                        <li>boys bottemwear</li>
                        <li>girls bottemwear</li>
                        <li>babys bottemwear</li>
                        <li>boys footwear</li>
                        <li>girls footwear</li>
                        <li>boys sopts & Activewear</li>
                        <li>girls sopts & Activewear</li>
                        <li>boys accessories</li>
                        <li>girls accessories</li>
                        <li>babies accessories</li>
                        <li>boys Sleepwear</li>
                        <li>girls Sleepwear</li>
                        <li>babys Sleepwear</li>
                        <li>boys begs & backpacks</li>
                        <li>girls begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
             
                    <ul className='p-0'>
                        <li>bath</li>
                        <li>beds </li>
                        <li>decor </li>
                        <li>kitchenware </li>
                        <li>shop by</li>
                        <li>product</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                  
                    <ul className='p-0'>
                        <li>mackup</li>
                        <li>mens fragrances </li>
                        <li>womens fragrances</li>    
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>about us</li>
                        <li>green card  </li>
                        <li>stores locator </li>    
                        <li>payment</li>
                        <li>option</li>
                        <li>investor</li>
                        <li>relation</li>
                    </ul>
                </div>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>tack order</li>
                        <li>FAQs</li>
                        <li>customer support</li>    
                        <li>Return & Exchange</li>
                        <li>policy</li>
                        <li>shipping policy</li>
                    </ul>
                </div>
            </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Kids">
                  KIDS
                </Link>
                <div className="mega-menu-content">
                  <div className="menga-menu">
                  <div className='mega'>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>westerwear</li>
                        <li>ethnicwear</li>
                        <li>sopts & Activewear</li>
                        <li>Sleepwear</li>
                        <li>begs,wallets & Clutches</li>
                        <li>footwear</li>
                        <li>accessories</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
           
                    <ul className='p-0'>
                        <li>top wear</li>
                        <li>bottem wear</li>
                        <li>ethnic wear</li>
                        <li>foot wear</li>
                        <li>sopts & Activewear</li>
                        <li>accessories</li>
                        <li>Sleepwear</li>
                        <li>begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>boys topwear</li>
                        <li>babys topwear</li>
                        <li>girls topwear</li>
                        <li>boys bottemwear</li>
                        <li>girls bottemwear</li>
                        <li>babys bottemwear</li>
                        <li>boys footwear</li>
                        <li>girls footwear</li>
                        <li>boys sopts & Activewear</li>
                        <li>girls sopts & Activewear</li>
                        <li>boys accessories</li>
                        <li>girls accessories</li>
                        <li>babies accessories</li>
                        <li>boys Sleepwear</li>
                        <li>girls Sleepwear</li>
                        <li>babys Sleepwear</li>
                        <li>boys begs & backpacks</li>
                        <li>girls begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
             
                    <ul className='p-0'>
                        <li>bath</li>
                        <li>beds </li>
                        <li>decor </li>
                        <li>kitchenware </li>
                        <li>shop by</li>
                        <li>product</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                  
                    <ul className='p-0'>
                        <li>mackup</li>
                        <li>mens fragrances </li>
                        <li>womens fragrances</li>    
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>about us</li>
                        <li>green card  </li>
                        <li>stores locator </li>    
                        <li>payment</li>
                        <li>option</li>
                        <li>investor</li>
                        <li>relation</li>
                    </ul>
                </div>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>tack order</li>
                        <li>FAQs</li>
                        <li>customer support</li>    
                        <li>Return & Exchange</li>
                        <li>policy</li>
                        <li>shipping policy</li>
                    </ul>
                </div>
            </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
                <div className="mega-menu-content">
                  <div className="menga-menu">
                  <div className='mega'>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>westerwear</li>
                        <li>ethnicwear</li>
                        <li>sopts & Activewear</li>
                        <li>Sleepwear</li>
                        <li>begs,wallets & Clutches</li>
                        <li>footwear</li>
                        <li>accessories</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
           
                    <ul className='p-0'>
                        <li>top wear</li>
                        <li>bottem wear</li>
                        <li>ethnic wear</li>
                        <li>foot wear</li>
                        <li>sopts & Activewear</li>
                        <li>accessories</li>
                        <li>Sleepwear</li>
                        <li>begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>boys topwear</li>
                        <li>babys topwear</li>
                        <li>girls topwear</li>
                        <li>boys bottemwear</li>
                        <li>girls bottemwear</li>
                        <li>babys bottemwear</li>
                        <li>boys footwear</li>
                        <li>girls footwear</li>
                        <li>boys sopts & Activewear</li>
                        <li>girls sopts & Activewear</li>
                        <li>boys accessories</li>
                        <li>girls accessories</li>
                        <li>babies accessories</li>
                        <li>boys Sleepwear</li>
                        <li>girls Sleepwear</li>
                        <li>babys Sleepwear</li>
                        <li>boys begs & backpacks</li>
                        <li>girls begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
             
                    <ul className='p-0'>
                        <li>bath</li>
                        <li>beds </li>
                        <li>decor </li>
                        <li>kitchenware </li>
                        <li>shop by</li>
                        <li>product</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                  
                    <ul className='p-0'>
                        <li>mackup</li>
                        <li>mens fragrances </li>
                        <li>womens fragrances</li>    
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>about us</li>
                        <li>green card  </li>
                        <li>stores locator </li>    
                        <li>payment</li>
                        <li>option</li>
                        <li>investor</li>
                        <li>relation</li>
                    </ul>
                </div>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>tack order</li>
                        <li>FAQs</li>
                        <li>customer support</li>    
                        <li>Return & Exchange</li>
                        <li>policy</li>
                        <li>shipping policy</li>
                    </ul>
                </div>
            </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  BRAND
                </Link>
                <div className="mega-menu-content">
                  <div className="menga-menu">
                  <div className='mega'>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>westerwear</li>
                        <li>ethnicwear</li>
                        <li>sopts & Activewear</li>
                        <li>Sleepwear</li>
                        <li>begs,wallets & Clutches</li>
                        <li>footwear</li>
                        <li>accessories</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
           
                    <ul className='p-0'>
                        <li>top wear</li>
                        <li>bottem wear</li>
                        <li>ethnic wear</li>
                        <li>foot wear</li>
                        <li>sopts & Activewear</li>
                        <li>accessories</li>
                        <li>Sleepwear</li>
                        <li>begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>boys topwear</li>
                        <li>babys topwear</li>
                        <li>girls topwear</li>
                        <li>boys bottemwear</li>
                        <li>girls bottemwear</li>
                        <li>babys bottemwear</li>
                        <li>boys footwear</li>
                        <li>girls footwear</li>
                        <li>boys sopts & Activewear</li>
                        <li>girls sopts & Activewear</li>
                        <li>boys accessories</li>
                        <li>girls accessories</li>
                        <li>babies accessories</li>
                        <li>boys Sleepwear</li>
                        <li>girls Sleepwear</li>
                        <li>babys Sleepwear</li>
                        <li>boys begs & backpacks</li>
                        <li>girls begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
             
                    <ul className='p-0'>
                        <li>bath</li>
                        <li>beds </li>
                        <li>decor </li>
                        <li>kitchenware </li>
                        <li>shop by</li>
                        <li>product</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                  
                    <ul className='p-0'>
                        <li>mackup</li>
                        <li>mens fragrances </li>
                        <li>womens fragrances</li>    
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>about us</li>
                        <li>green card  </li>
                        <li>stores locator </li>    
                        <li>payment</li>
                        <li>option</li>
                        <li>investor</li>
                        <li>relation</li>
                    </ul>
                </div>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>tack order</li>
                        <li>FAQs</li>
                        <li>customer support</li>    
                        <li>Return & Exchange</li>
                        <li>policy</li>
                        <li>shipping policy</li>
                    </ul>
                </div>
            </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">
                  BEAUTY
                </Link>
                <div className="mega-menu-content">
                  <div className="menga-menu">
                  <div className='mega'>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>westerwear</li>
                        <li>ethnicwear</li>
                        <li>sopts & Activewear</li>
                        <li>Sleepwear</li>
                        <li>begs,wallets & Clutches</li>
                        <li>footwear</li>
                        <li>accessories</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
           
                    <ul className='p-0'>
                        <li>top wear</li>
                        <li>bottem wear</li>
                        <li>ethnic wear</li>
                        <li>foot wear</li>
                        <li>sopts & Activewear</li>
                        <li>accessories</li>
                        <li>Sleepwear</li>
                        <li>begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>boys topwear</li>
                        <li>babys topwear</li>
                        <li>girls topwear</li>
                        <li>boys bottemwear</li>
                        <li>girls bottemwear</li>
                        <li>babys bottemwear</li>
                        <li>boys footwear</li>
                        <li>girls footwear</li>
                        <li>boys sopts & Activewear</li>
                        <li>girls sopts & Activewear</li>
                        <li>boys accessories</li>
                        <li>girls accessories</li>
                        <li>babies accessories</li>
                        <li>boys Sleepwear</li>
                        <li>girls Sleepwear</li>
                        <li>babys Sleepwear</li>
                        <li>boys begs & backpacks</li>
                        <li>girls begs & backpacks</li>
                        <li>shop by Occasion</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
             
                    <ul className='p-0'>
                        <li>bath</li>
                        <li>beds </li>
                        <li>decor </li>
                        <li>kitchenware </li>
                        <li>shop by</li>
                        <li>product</li>
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                  
                    <ul className='p-0'>
                        <li>mackup</li>
                        <li>mens fragrances </li>
                        <li>womens fragrances</li>    
                        <li>shop by Brand</li>
                    </ul>
                </div>
                <div className='col-sm'>
                
                    <ul className='p-0'>
                        <li>about us</li>
                        <li>green card  </li>
                        <li>stores locator </li>    
                        <li>payment</li>
                        <li>option</li>
                        <li>investor</li>
                        <li>relation</li>
                    </ul>
                </div>
                <div className='col-sm'>
                    
                    <ul className='p-0'>
                        <li>tack order</li>
                        <li>FAQs</li>
                        <li>customer support</li>    
                        <li>Return & Exchange</li>
                        <li>policy</li>
                        <li>shipping policy</li>
                    </ul>
                </div>
            </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Admin">
                  ADMIN
                </Link>
              </li>
            </ul>
            
            <FaRegUser className="fug"/>
           <Link to='/cart'>
           <LuHeartHandshake className="lhh"/>{totalCount}    
            </Link>
           {totalPrice}
            <RiShoppingBag4Line className='rsb'/>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
