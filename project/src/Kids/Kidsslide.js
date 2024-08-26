import React  from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Navigation, Pagination, Keyboard } from "swiper/modules";
import Kidsmapslid from '../Kids/Kidsmap/Kidmapslid'
import kidsmini from '../image/kidsmini.jpg'
import kidsmini1 from '../image/kidsmini1.jpg'
import kidsmini2 from '../image/kidsmini2.jpg'
import kidsmini3 from '../image/kidsmini3.jpg'
import kidsmini4 from '../image/kidsmini4.jpg'
import kidsmini5 from '../image/kidsmini5.jpg'
import './kids.css'


const Kidsslide = () => {
  return (
    <div className='kos-sm'>
        <Swiper 
        pagination={{
            clickable: true,
        }}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper"
        >
            {Kidsmapslid.map((item) =>
            <SwiperSlide key={item.id}>
                <div className='kids-image-silde'>
                    <img src={item.Image} alt='img'/>
                </div>
            </SwiperSlide>

            )}
        </Swiper>
        <div className='container'>
            <div className='koc-sm'>
                <div className='row'>
                    <div className='col-sm'>
                        <img src={kidsmini} alt='img'/>
                        <h1 className='kbn-sm'>
                            Footwear
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={kidsmini1} alt='img'/>
                        <h1 className='kbn-sm'>
                            Tops & Tees
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={kidsmini2} alt='img'/>
                        <h1 className='kbn-sm'>
                            AW24 style
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={kidsmini3} alt='img'/>
                        <h1 className='kbn-sm'>
                            Shorts & Bottoms
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={kidsmini4} alt='img'/>
                        <h1 className='kbn-sm'>
                            Beauty
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={kidsmini5} alt='img'/>
                        <h1 className='kbn-sm'>
                            Fragrance
                        </h1>
                    </div>
                </div>
            </div>  
        </div> 
    </div>
    
  );
}
export default Kidsslide;

