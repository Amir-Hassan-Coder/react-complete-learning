import React from 'react'

const ArraysAndObjects = () => {
     const array = ["Amir" , "khan" , "jandal" , "Fahad"]
     const user = {
        name:"Amir jandal",
        email:"jandal@gmail.com",
        age:21,
        
     }
     const {name , email , age} = user;
  return (
    
   <>
   <h1>arrays in Objects</h1>
   <ul>
    {/* tested array  */}
    {array.map((item)=>{
        return(

            <li>{item}</li>
        )
    })}
   </ul>
   <h3>user name is : {name} email is : {email} age is : {age}</h3>
   </>
  )
}

export default ArraysAndObjects
