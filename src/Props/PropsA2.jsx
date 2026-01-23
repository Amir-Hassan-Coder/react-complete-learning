import React from 'react'

const PropsA2 = ({isLogin}) => {
  return (
   <>
   <h1>Assignment 1</h1>
   {
    isLogin === true ? <button onClick={()=>alert("hello test")}>LogOut</button> : <button>Login</button>
   }
   </>
  )
}

export default PropsA2
