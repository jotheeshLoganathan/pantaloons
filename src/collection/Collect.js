import React from 'react'
import great from '../image/image.jpeg'
import great1 from '../image/image1.jpeg'
import great2 from '../image/image2.jpeg'
import great3 from '../image/image3.jpeg'
import great4 from '../image/image4.jpeg'
import { RiShoppingBag4Line } from "react-icons/ri";
import './collect.css'

const Collect = () => {
  return (
    <div className='bob'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src={great} alt='img' />
                </div>
                <div className='col-md-6'>
                    <img  src={great1} alt='img'/>
                </div>
            </div>
            <div className='bob2'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <img src={great2} alt='img'/>
                        <RiShoppingBag4Line className='bic'/>
                        <h1 className='btxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                    <div className='col-sm-4'>
                        <img src={great3} alt='img'/>
                        <RiShoppingBag4Line className='bic'/>
                        <h1 className='btxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                    <div className='col-sm-4'>
                        <img src={great4} alt='img'/>
                        <RiShoppingBag4Line className='bic'/>
                        <h1 className='btxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Collect;