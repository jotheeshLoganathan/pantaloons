import React from 'react';
import Slide from '../collection/Slide';
import Cardcollection from '../collection/Cardcollection';
import Arrivals from '../collection/Arrivals';
import Treanding from '../collection/Treanding';
import Collect from '../collection/Collect';



const Home=() =>{
  return(
    <div>
      <Slide/>
      <Cardcollection/>
      <Arrivals/>
      <Collect/>

      <Treanding/>
    </div>
  )
 

}
export default Home;