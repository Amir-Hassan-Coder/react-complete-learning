import React from 'react'

const Prop1 = ({name , age , array}) => {
  return (
   <>
   <h2>My Name Is = {name} And I am {age} year old</h2>
   <ul>
    {array.map((e)=>{
   return <h3> my last name is {e}</h3>
    })}
   </ul>
   </>
  )
}

export default Prop1
