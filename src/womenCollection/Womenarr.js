import React from "react";
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
         {Womancard.map((item) =>(
          <SwiperSlide>
            <div class="card" key={item.id}>
              <img src={item.Image} className="card-img-top" alt="img"/>
              <div className="luheart">
              {
                  cartProduct.find(items=>items.id == item.id) ?
                  <button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteCart(item)}>Remove</button>
                  :<button type="button" className="btn btn-success btn-sm" onClick={()=>addCart(item)}>ADD</button>
                }
              </div>
              <div class="card-body ">
                <h6 className="jj1">{item.title}</h6>
                <p className="jj2">Discount Will End SOON...</p>
              </div>
              <div className="jj3">
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
