import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import './womenarr.css'
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import Mensmapcard from "../mens/Mensmap/Mensmapcard";
import { useDispatch, useSelector } from "react-redux";
import { addToCort, deleteFromCart } from "../store/cardslice/Cardslice";

const Menarr = () => {

  const cartProduct = useSelector(state=> state.cart.cartItems) 

  const dispatch = useDispatch()

  const addCart = (item) =>(
    dispatch(addToCort(item))
  )

  const deleteCart =(item)=>(
    dispatch(deleteFromCart(item))
  )

  return (
    <div className="oi">
      <div className="container">
        <div className="mdhd">
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
         {Mensmapcard.map((item) =>(
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
                <h6 className="mj1">{item.title}</h6>
                <p className="mj2">Discount Will End SOON...</p>
              </div>
              <div className="mj3">
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

export default Menarr;
