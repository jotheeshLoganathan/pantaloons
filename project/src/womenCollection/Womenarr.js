import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './womenarr.css'
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import Womancard from "../maping/Womancard";
import { useDispatch, useSelector } from "react-redux";
import { addToCort, deleteFromCart } from "../store/cardslice/Cardslice";

const Womenarr = () => {
  const [womenProduct,setWomenProduct]= useState([]);
  useEffect(()=>{
    fetch("http://localhost:5000/getwomen")
    .then((res) =>res.json())
    .then((data) =>setWomenProduct(data))
},[]);

  const cartProduct = useSelector(state=> state.cart.cartItems) 

  const dispatch = useDispatch()

  const addCart = (item) =>(
    dispatch(addToCort(item))
  )

  const deleteCart =(item)=>(
    dispatch(deleteFromCart(item))
  )
  return (
    <div className="jio">
      <div className="container">
        <div className="tdhd">
          <h1>Trending Now</h1>
        </div>

        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard]}
          className="mySwiper"
        >
         {womenProduct.map((item) => (
            <SwiperSlide>
              <div className="card" key={item._id}>
                <img src={item.image} className="card-img-top" alt="img"/>
                <div className="luheart">
                {
                  cartProduct.find(items=>items._id == item._id) ?
                  <button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteCart(item)}>Remove</button>
                  :<button type="button" className="btn btn-success btn-sm" onClick={()=>addCart(item)}>ADD</button>
                }
                </div>
                <div className="card-body">
                  <h6 className="cd-hd">{item.title}</h6>
                  <p className="cd-par">{item.ds}</p>
                </div>
                <div className="cd-txt">
                  <p>₹{item.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Womenarr;
