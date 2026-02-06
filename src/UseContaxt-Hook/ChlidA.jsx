import React, { useContext } from 'react'
import { UserContext } from '../App'
const ChlidA = () => {
    const name = useContext(UserContext)
  return (
  <>
   <h2>Chlid A my name is :  {name}</h2>
  </>
  )
}

export default ChlidA
