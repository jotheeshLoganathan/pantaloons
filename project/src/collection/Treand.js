import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./tranding.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import { LuHeartHandshake } from "react-icons/lu";
import Treandmap from '../maping/Treandmap';

const Treand = () => {
  return (
    <div className="td">
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
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
         {Treandmap.map((item) =>(
          <SwiperSlide>
            <div class="card" key={item.id}>
              <img src={item.Image} className="card-img-top" alt="img"/>
              <div className="luheart">
                <LuHeartHandshake />
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
  )
}

export default Treand