import React from 'react'
import { RiShoppingBag4Line } from "react-icons/ri";
import name from '../image/cul.jpeg'
import name1 from '../image/cul1.jpeg'
import name2 from '../image/cul2.jpeg'
import name3 from '../image/gl.jpeg'
import './womencollect.css'

const Womencollect = () => {
  return (
    <div className='while'>
        <div className='container'>
            <div className='wow'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <img src={name} alt='img'/>
                        <RiShoppingBag4Line className='wic'/>
                        <h1 className='wtxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                    <div className='col-sm-4'>
                        <img src={name1} alt='img'/>
                        <RiShoppingBag4Line className='wic'/>
                        <h1 className='wtxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                    <div className='col-sm-4'>
                        <img src={name2} alt='img'/>
                        <RiShoppingBag4Line className='wic'/>
                        <h1 className='wtxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                </div>
            </div>
            <div className='do-sm'>
                <img src={name3} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default Womencollect