import React, { useContext } from 'react'
import { UserContext } from '../App';
const ChlidB = () => {
    const name = useContext(UserContext);
  return (
   <>
    <h2>Chlid B My name is {name}</h2>
    
   </>
  )
}

export default ChlidB
