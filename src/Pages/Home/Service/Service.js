import React from 'react'; 
import { Link } from 'react-router-dom';
import './Service.css'

function Service({service}) {
    const{id,name,img,price,time,des}=service;
  return (
    <div className='service pb-3' >
         <img src={img} alt='' width={250} height={200}></img>
        <h1>Service name:{name}</h1>
        <h2>Service Charge: ${price}</h2>
        <h5 className='py-25'>{des}</h5>
        <h2>Time duration:{time} hour</h2>
        <Link to={`/booking/${id}`}>
        <button className='btn btn-info'>Book {name.toLowerCase()}</button>
        
        </Link>
       
    </div>
  )
}

export default Service