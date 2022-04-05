import React from 'react';
import {useEffect,useState} from 'react';
import Service from '../Service/Service';
import './Services.css'



function Services() {
    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch('services.json')
      .then(res=>res.json())
      .then(data=>setServices(data));
    }, [])
    
  return (
    <div className='service-container'>
        {
            services.map(service =><Service
            key={service.id}
            service={service}
            ></Service>)
        }
    </div>
  )
}

export default Services

