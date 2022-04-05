import React from 'react';
import Services from '../Services/Services';
import Experts from '../Experts/Experts';

function Home(){
  return (
    <div>
        
        <Services/>
        <h2 style={{marginTop:30,marginBottom:30}}>Our Experts</h2>
        <Experts/>
    </div>
  )
}

export default  Home;