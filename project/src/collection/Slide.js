import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Imageslid from '../maping/Imageslid';
// import Slideimage from '../image/previous.png'


import './slide.css'
import { Navigation, Pagination, Keyboard } from "swiper/modules";



const Slide = () => {
  return (
    <div>
       <Swiper 
        pagination={{
            clickable: true,
        }}
        navigation={true} 
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper image-silde-swip"

          
        >
          {Imageslid.map((item)=>
          <SwiperSlide key={item.id} className='image-side-event'>
            <div className='image-slide-event-sm'>
              <img src={item.Image} alt='img'/>
            </div>
          </SwiperSlide>

          )}
          
        </Swiper>
    </div>
  )
}

export default Slide;