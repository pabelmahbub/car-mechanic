import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css";

function AddService() {
         const { register, handleSubmit,reset } = useForm();
         const onSubmit = data => {
                     console.log(data);
                     axios.post('http://localhost:5000/services', data)
                     .then(res=>{
                              console.log(res);
                              if(res.data.insertId){
                                alert('data added successfully');
                                reset();
                              }
                     })
};

  return (
   <div className='add-service'>
         <h1>Services add Here.</h1>
         {/**React-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder='Service Name'/>
      <textarea {...register("description")} placeholder='Service Description'/>
      <input type="number" {...register("price")} placeholder='Service Price'/>
      <input {...register("img")} placeholder='Img URL'/>
      <input type="submit" />
    </form>
    </div>
  )
}

export default AddService