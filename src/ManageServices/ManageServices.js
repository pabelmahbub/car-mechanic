import React from 'react';
import { useEffect,useState } from 'react';

function ManageServices() {
      const [services, setServices] = useState([]);
      useEffect(() => {
         fetch ('https://car-mechanic-server.herokuapp.com/services')
         .then(res => res.json())
         .then(data => setServices(data));
      }, [])

      const handleDelete = id =>{
                              const url = `https://car-mechanic-server.herokuapp.com/services/${id}`;
                              fetch(url, {
                                         method:'DELETE'                   
                              })
                              .then(res=>res.json())
                              .then(data=>{
                                   console.log(data);
                                   if(data.deletedCount){
                                       alert('data is deleted');
                                       const remaining = services.filter(service => service._id !== id);
                                       setServices(remaining);
                                   }
                              })
      }
      
  return (
    <div>
         <h1>ManageServices</h1>
         {
                              services.map(service => <div key={service._id}>
                                        <h4>{service.name}</h4>
                                         <button onClick={()=>handleDelete(service._id)}>delete</button>
                              </div>)
         }
    </div>
  )
}

export default ManageServices