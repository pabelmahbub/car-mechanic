import React from 'react';
import Expert from '../Expert/Expert';
import {useEffect,useState} from 'react';
import './Expert.css'


function Experts() {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
      fetch('expert.json')
      .then(res=>res.json())
      .then(data=>setExperts(data));
    }, [])
  return (
    <div id="experts" className='container'>
        {/* <h2 className='text-primary'>Hello</h2> */}
        <div className="row">
        { 
            experts.map(expert=><Expert
            expert={expert}
            key={expert.id}
            ></Expert>)
        }
        </div>
       
    </div>
  )
}

export default Experts