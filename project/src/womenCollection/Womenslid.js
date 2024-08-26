import React  from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Woman from '../maping/Woman'
import wm from '../image/201.jpg'
import wm1 from '../image/202.jpg'
import wm2 from '../image/203.jpg'
import wm3 from '../image/204.jpg'
import wm4 from '../image/205.jpg'
import wm5 from '../image/206.jpg'

import './womenslid.css';
import { Navigation, Pagination, Keyboard } from "swiper/modules";


const WomenSlid = () => {
  return (
    <div className='wos-sm'>
        <Swiper 
        pagination={{
            clickable: true,
        }}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper"
        >
            {Woman.map((item) =>
            <SwiperSlide key={item.id}>
                <div className='women-image-silde'> 
                    <img src={item.Image} alt='img'/>           
                </div>
            </SwiperSlide>

            )}  
        </Swiper>
        <div className='container'>
            <div className='woc-sm'>
                <div className='row'>
                    <div className='col-sm'>
                        <img src={wm} alt='img'/>
                        <h1 className='bn-sm'>
                            Footwear
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={wm1} alt='img'/>
                        <h1 className='bn-sm'>
                            Tops & Tees
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={wm2} alt='img'/>
                        <h1 className='bn-sm'>
                            AW24 style
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={wm3} alt='img'/>
                        <h1 className='bn-sm'>
                            Shorts & Bottoms
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={wm4} alt='img'/>
                        <h1 className='bn-sm'>
                            Beauty
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={wm5} alt='img'/>
                        <h1 className='bn-sm'>
                            Fragrance
                        </h1>
                    </div>
                </div>
            </div>  
        </div>
    </div>
    
  );
}
export default WomenSlid;
