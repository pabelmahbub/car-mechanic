import React from 'react';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';
import Banner from '../Banner/Banner';

function Home(){
  return (
    <div>
      <div style={{marginBlock:60}}>
      <Banner></Banner>
      </div>
       
        <Services/>
        <h2 style={{marginTop:30,marginBottom:30}}>Our Experts</h2>
        <Experts/>
    </div>
  )
}

export default  Home;