import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './card.css';
import { Pagination } from 'swiper/modules';

import { FaShopify } from "react-icons/fa";
import Homecardcollection from '../maping/Homecardcollection';
import { useDispatch, useSelector } from 'react-redux';
import { addToCort, deleteFromCart } from '../store/cardslice/Cardslice';


const Cardcollection=() =>{
    
    const cartProduct = useSelector(state=> state.cart.cartItems) 

    const dispatch = useDispatch()
  
    const addCart = (item) =>(
      dispatch(addToCort(item))
    )
  
    const deleteCart =(item)=>(
      dispatch(deleteFromCart(item))
    )
  return (
    <div className='cd1'>
        <div className='container'>
            <div className='cd2'>
                <h1 className='cdtext'>
                Deals of the Day
                </h1>
                <button type="button" className="btn btn-light">VIEW ALL</button>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
            {Homecardcollection.map((item) =>(

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


  );
}
export default Cardcollection;