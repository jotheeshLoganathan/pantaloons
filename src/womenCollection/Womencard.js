import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './womencerd.css'

import { FaShopify } from "react-icons/fa";



// import required modules
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { useDispatch, useSelector } from 'react-redux';
import { addToCort, deleteFromCart } from '../store/cardslice/Cardslice';
import Womencardmap from '../maping/Womencardmap';


const Womencard = () => {
    const cartProduct = useSelector(state=> state.cart.cartItems) 

    const dispatch = useDispatch()
  
    const addCart = (item) =>(
      dispatch(addToCort(item))
    )
  
    const deleteCart =(item)=>(
      dispatch(deleteFromCart(item))
    )
  return (
    <div className='wmc-sm'>
      <div className='container'>
        <div className='ss'>
          <h1 className='wmt-sm'>
          Deals of the Day
          </h1>
          <button type="button" className="btn btn-outline-light">VIEW ALL</button>

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

            {Womencardmap.map((item) =>(

        <SwiperSlide className='swiper'>
                <div className="card" key={item.id}>
                    <img src={item.Image} className="card-img-top" alt="img"/>
                    <div className='luheart'>
                        {
                            cartProduct.find(items=>items.id == item.id) ?
                            <button type="button" className="btn btn-danger btn-sm" onClick={()=>deleteCart(item)}>Remove</button>
                            :<button type="button" className="btn btn-success btn-sm" onClick={()=>addCart(item)}>ADD</button>
                        }            
                </div>
                    <div className="card-body">
                        <p className="card-text">{item.discount}% OFF</p>
                        <FaShopify />
                        <p className='card-discount'>Flash Deal</p>                       
                    </div>
                    <div className='cd-txt'>
                    <h6 className='cd-hd'>{item.title}</h6>
                    <p className='cd-par'>Discount Will End SOON...</p>
                    </div>
                    <div className='rs'>
                        <p>₹{item.price}</p>
                        <p className='amm'>₹1500</p>
                    </div>
                </div>
            </SwiperSlide>
            ))}

      </Swiper>
      </div>  
    </div>
  )
}

export default Womencard