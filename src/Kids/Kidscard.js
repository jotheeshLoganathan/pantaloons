import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import './kids.css'
import { Navigation, Pagination, Keyboard } from "swiper/modules";


import Kidsmapcard from "../Kids/Kidsmap/Kidmapcard";
import { useDispatch, useSelector } from "react-redux";
import { addToCort, deleteFromCart } from "../store/cardslice/Cardslice";

const Kidscard = () => {
  const cartProduct = useSelector(state=> state.cart.cartItems) 

  const dispatch = useDispatch()

  const addCart = (item) =>(
    dispatch(addToCort(item))
  )

  const deleteCart =(item)=>(
    dispatch(deleteFromCart(item))
  )
  return (
    <div className="koi">
      <div className="container">
        <div className="kdhd">
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
         {Kidsmapcard.map((item) =>(
          <SwiperSlide>
            <div className="card" key={item.id}>
              <img src={item.Image} className="card-img-top" alt="img"/>
              <div className="luheart">
              {
                  cartProduct.find(items=>items.id == item.id) ?
                  <button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteCart(item)}>Remove</button>
                  :<button type="button" className="btn btn-success btn-sm" onClick={()=>addCart(item)}>ADD</button>
                }
              </div>
              <div className="card-body ">
                <h6 className="kj1">{item.title}</h6>
                <p className="kj2">Discount Will End SOON...</p>
              </div>
              <div className="kj3">
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

export default Kidscard;
