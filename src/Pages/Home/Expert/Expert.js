import React from 'react'

function Expert({expert}) {
    const {name,price,time,img}=expert;
  return (
    <div className='col-lg-4 col-md-6 col-12'>
        <img src={img} alt='' width={250} height={200}></img>
        <h1 className='text-info'>Expert name:{name}</h1>
        <h2>Service Charge: ${price}</h2>
        <h2>Time duration:{time} hour</h2>
    </div>
  )
}

export default Expert