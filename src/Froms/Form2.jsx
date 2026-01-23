import React, { useState } from 'react'

const Form2 = () => {
    const [formData , setFormData] = useState({
        name:"",
        email:"",
        age:""
    });
    const handelSubmit = (e)=>{
       e.preventDefault();

       console.log(formData);
       setFormData({
        name:"",
        email:"",
        age:""
    })
    }

  const handelChange = (e)=>{
    const {name , value} = e.target;
    setFormData((previousValues)=>({
     ...previousValues,
     [name]:value
      
    }))
     
  
  }
  return (
   <>
   <h1>Advance Form</h1>
   <form onSubmit={handelSubmit}>
    <label htmlFor="Name"> Name : </label>
    <input type="text" name='name' value={formData.name} onChange={handelChange}/>
    <br />

     <label htmlFor="Email"> Email : </label>
    <input type="text" name='email' value={formData.email} onChange={handelChange}/>
    <br />


     <label htmlFor="Name"> Age : </label>
    <input type="text" name='age' value={formData.age} onChange={handelChange}/>
    <br />

   <button type='submit'>Submit Data</button>
   </form>
   </>
  )
}

export default Form2
