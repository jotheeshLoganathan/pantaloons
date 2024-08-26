import React from 'react'
import round from '../image/mround.jpeg'
import round1 from '../image/mround1.jpeg'
import round2 from '../image/mround2.jpeg'
import round3 from '../image/mround3.jpeg'
import './mens.css'

const Menround = () => {
  return (
    <div className='mir-sm'>
        <div className='container'>
            <div className='mirr1-sm'>
                <div className='mir1-sm'>
                    <img src={round} alt='img'/>
                    <h1 className='mirtxt-sm'>Structured Statement</h1>
                </div>
                <div className='mir1-sm'>
                    <img src={round1} alt='img'/>
                    <h1 className='mirtxt-sm'>Vintage Romance</h1>
                </div>
                <div className='mir1-sm'>
                    <img src={round2} alt='img'/>
                    <h1 className='mirtxt-sm'>Ivory bloom</h1>
                </div>
                <div className='mir1-sm'>
                    <img src={round3} alt='img'/>
                    <h1 className='mirtxt-sm'>Golden Meoments</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menround



// .ir1 img{
//     width: 250px;
//     justify-content: space-evenly;
//     /* border: 5px solid #f3c141c2; */
//     border-radius: 50%;


// }