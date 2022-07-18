import React from 'react';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';


function Booking() {
    const {serviceId}= useParams();

    const [service, setService] = useState({});

    useEffect(() => {
      fetch(`http://localhost:5000/services/${serviceId}`)
      .then(res=> res.json())
      .then(data => setService(data));
    }, [])
    
  return (
    <div>
      <h3>Service Details: {service.name}</h3>
      <h2>This is booking.{serviceId}</h2>
    </div>
  )
}

export default Booking
