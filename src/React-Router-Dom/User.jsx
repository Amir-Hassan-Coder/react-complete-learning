import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    console.log('value of useparmas is ' , useParams());
    const {id} = useParams();
  return (
   <>
   <h1>Parametarize Router in React Js </h1>
   <h2>User Id : = {id}</h2>
   </>
  )
}

export default User
