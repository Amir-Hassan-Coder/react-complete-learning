import React, { useMemo, useState } from 'react'

const UseMamo = () => {
    const [add , setAdd] = useState(0);
     const [sub , setSub] = useState(100);
     const multi = useMemo(()=>{
        console.log("calling after clicking with add");
        
        return add*10
     },[add]);
  return (
   <>
   <h1>Learning UseMamo hook</h1>
    <h2> add * = {multi}</h2>
    <h1>{add}</h1>
    <h1>{sub}</h1>
   <button onClick={()=>setAdd(add+1)}>add</button>
   <button onClick={()=>setSub(sub-1)}>Sub</button>
   </>
  )
}

export default UseMamo
