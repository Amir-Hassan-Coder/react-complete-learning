import React, { useState } from 'react'
import Parant from './parant'

const MainDrilling = () => {
    const [test,setTest] = useState('');
  return (
   <>
    <h1>Learning Props Drilling</h1>
     
    <Parant onChange = {setTest} text = {test}/>
   </>
  )
}

export default MainDrilling
