import React from 'react'
import round from '../image/kround.jpeg'
import round1 from '../image/kround1.jpeg'
import round2 from '../image/kround2.jpeg'
import round3 from '../image/kround3.jpeg'
import './kids.css'

const Kidsround = () => {
  return (
    <div className='kir-sm'>
        <div className='container'>
            <div className='kirr1-sm'>
                <div className='kir1-sm'>
                    <img src={round} alt='img'/>
                    <h1 className='kirtxt-sm'>Structured Statement</h1>
                </div>
                <div className='kir1-sm'>
                    <img src={round1} alt='img'/>
                    <h1 className='kirtxt-sm'>Vintage Romance</h1>
                </div>
                <div className='kir1-sm'>
                    <img src={round2} alt='img'/>
                    <h1 className='kirtxt-sm'>Ivory bloom</h1>
                </div>
                <div className='kir1-sm'>
                    <img src={round3} alt='img'/>
                    <h1 className='kirtxt-sm'>Golden Meoments</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kidsround;



// .ir1 img{
//     width: 250px;
//     justify-content: space-evenly;
//     /* border: 5px solid #f3c141c2; */
//     border-radius: 50%;


// }