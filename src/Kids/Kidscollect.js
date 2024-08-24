import React from 'react'
import { RiShoppingBag4Line } from "react-icons/ri";
import kname from '../image/kim.jpeg'
import kname1 from '../image/kim1.jpeg'
import kname2 from '../image/kim2.jpeg'
import kname3 from '../image/kgl.jpeg'
import './kids.css'

const Kidscollect = () => {
  return (
    <div className='k-while'>
        <div className='container'>
            <div className='kow'>
                <div className='row'>
                    <div className='col-sm-4'>
                        <img src={kname} alt='img'/>
                        <RiShoppingBag4Line className='kac'/>
                        <h1 className='ktxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                    <div className='col-sm-4'>
                        <img src={kname1} alt='img'/>
                        <RiShoppingBag4Line className='kac'/>
                        <h1 className='ktxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                    <div className='col-sm-4'>
                        <img src={kname2} alt='img'/>
                        <RiShoppingBag4Line className='kac'/>
                        <h1 className='ktxt'>
                            SHOP LOOK #1
                        </h1>
                    </div>
                </div>
            </div>
            <div className='done-sm'>
                <img src={kname3} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default Kidscollect;