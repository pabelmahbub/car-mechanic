import React from 'react'; 
import './Service.css'

function Service({service}) {
    const{name,img,price,time,des}=service;
  return (
    <div className='service'>
         <img src={img} alt='' width={250} height={200}></img>
        <h1>Service name:{name}</h1>
        <h2>Service Charge: ${price}</h2>
        <h5 style={{padding:20}}>{des}</h5>
        <h2>Time duration:{time} hour</h2>
       
    </div>
  )
}

export default Service