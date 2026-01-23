import React, { useState } from 'react'
import './State.css'
const WonState = () => {
    const [obj,setObj] = useState({
        name:"Amir",
        city:"Kohat",
        email:"amirkhan@gmail.com"
    });

    const testObj = ()=>{
        setObj({...obj, name:"Jandal"});
    }

    const [like , setLike ] = useState(false);

    const [mode , setMode] = useState(false);
  return (
    <>
     <h1>Learning objects with usestate</h1>
     <h3>name = {obj.name} city = : {obj.city} email := {obj.email}</h3>
     <button onClick={testObj}>Change Name </button>

     <div className="liked">
     
     <button onClick={()=>setLike(!like)}>
        {like ? "❤️" : "👍"}
     </button>
     </div>

     <div className = {mode ? "dark" : "light"}>
        <h1>Testing modes</h1>
     </div>

     <button onClick={()=>setMode(!mode)}>
        {mode ? "Light" : "Dark"}
     </button>
    </>
  )
}

export default WonState
