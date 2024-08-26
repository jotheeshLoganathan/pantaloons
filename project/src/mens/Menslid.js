import React  from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Navigation, Pagination, Keyboard } from "swiper/modules";
import Slidmap from '../mens/Mensmap/Slidmap'
import menmini from '../image/menmini.jpg'
import menmini1 from '../image/menmini1.jpg'
import menmini2 from '../image/menmini2.jpg'
import menmini3 from '../image/menmini3.jpg'
import menmini4 from '../image/menmini4.jpg'
import menmini5 from '../image/menmini5.jpg'


const Menslid = () => {
  return (
    <div className='mos-sm'>
        <Swiper 
        pagination={{
            clickable: true,
        }}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper"
        >
            {Slidmap.map((item) =>
            <SwiperSlide key={item.id}>
                <div className='men-image-silde'>            
                    <img src={item.Image} alt='img'/>
                </div>
            </SwiperSlide>

            )}
        </Swiper>
        <div className='container'>
            <div className='woc-sm'>
                <div className='row'>
                    <div className='col-sm'>
                        <img src={menmini} alt='img'/>
                        <h1 className='bn-sm'>
                            Footwear
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={menmini1} alt='img'/>
                        <h1 className='bn-sm'>
                            Tops & Tees
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={menmini2} alt='img'/>
                        <h1 className='bn-sm'>
                            AW24 style
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={menmini3} alt='img'/>
                        <h1 className='bn-sm'>
                            Shorts & Bottoms
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={menmini4} alt='img'/>
                        <h1 className='bn-sm'>
                            Beauty
                        </h1>
                    </div>
                    <div className='col-sm'>
                        <img src={menmini5} alt='img'/>
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
export default Menslid;

