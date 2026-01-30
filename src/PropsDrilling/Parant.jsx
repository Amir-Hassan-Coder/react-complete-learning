import React from 'react'

const Parant = ({onChange,text}) => {
  return (
   <>
    <h1>learning props and lifting state and shared states</h1>
    <input type="text" onChange={(e)=> onChange(e.target.value)}/>
    <h2>Typed Value = {text}</h2>
   </>
  )
}

export default Parant
