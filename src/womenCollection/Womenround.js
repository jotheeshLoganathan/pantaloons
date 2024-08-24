import React from 'react'
import round from '../image/round.jpeg'
import round1 from '../image/round1.jpeg'
import round2 from '../image/round2.jpeg'
import round3 from '../image/round3.jpeg'
import './womenround.css'

const Womenround = () => {
  return (
    <div className='ir-sm'>
        <div className='container'>
            <div className='irr1-sm'>
                <div className='ir1-sm'>
                    <img src={round} alt='img'/>
                    <h1 className='irtxt-sm'>Structured Statement</h1>
                </div>
                <div className='ir1-sm'>
                    <img src={round1} alt='img'/>
                    <h1 className='irtxt-sm'>Vintage Romance</h1>
                </div>
                <div className='ir1-sm'>
                    <img src={round2} alt='img'/>
                    <h1 className='irtxt-sm'>Ivory bloom</h1>
                </div>
                <div className='ir1-sm'>
                    <img src={round3} alt='img'/>
                    <h1 className='irtxt-sm'>Golden Meoments</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Womenround



// .ir1 img{
//     width: 250px;
//     justify-content: space-evenly;
//     /* border: 5px solid #f3c141c2; */
//     border-radius: 50%;


// }