import React from 'react'
import { RiShoppingBag4Line } from "react-icons/ri";
import name from '../image/mcul.jpeg'
import name1 from '../image/mcul1.jpeg'
import name2 from '../image/mcul2.jpeg'
import name3 from '../image/mgl.jpeg'
import './mens.css'

const Mensrounds = () => {
  return (
    <div className='m-while'>
        <div className='container'>
            <div className='mow'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <img src={name} alt='img'/>
                        <RiShoppingBag4Line className='mac'/>
                        <h1 className='mtxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                    <div className='col-sm-4'>
                        <img src={name1} alt='img'/>
                        <RiShoppingBag4Line className='mac'/>
                        <h1 className='mtxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                    <div className='col-sm-4'>
                        <img src={name2} alt='img'/>
                        <RiShoppingBag4Line className='mac'/>
                        <h1 className='mtxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                </div>
            </div>
            <div className='dose-sm'>
                <img src={name3} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default Mensrounds