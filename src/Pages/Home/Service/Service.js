import React from 'react'; 
import { Link } from 'react-router-dom';
import './Service.css'

function Service({service}) {
    const{_id,name,img,price,time,des}=service;
  return (
    <div className='service pb-3' >
         <img src={img} alt='' width={420} height={250}></img>
        <h1 style={{fontSize:20,paddingTop:6}}>Service name:{name}</h1>
        <h2 style={{fontSize:24}}>Service Charge: ${price}</h2>
        <h5 style={{paddingRight:10,paddingLeft:10,fontSize:13}}>{des}</h5>
        <h2 style={{fontSize:24,color:'royalblue'}}>Time duration:{time} hour</h2>
        <Link to={`/booking/${_id}`}>
        <button className='btn btn-info'>Book {name.toLowerCase()}</button>
        
        </Link>
       
    </div>
  )
}

export default Service