import { useState } from 'react'

const State1 = () => {
    const [count,setCount] = useState(0);
    const [togel , setTogel] = useState(false);
    const [like,setLike] = useState(false);
  return (
   <>
    <h1>Learning State Managment in React JS</h1>
    <h2>Counter is : = {count}</h2>
    <button onClick={()=>setCount(count+1)}>Increase Counter </button>
     <button onClick={()=>setCount(count-1)}>Decrease Counter </button>
     <hr />
     <hr />

     <button onClick={()=>setTogel(!togel)}>
        {togel ? "Hide " : "Show" } Text
     </button>
    
     {togel && <p>Lorem ipsum dolor sit.</p>}

     <button onClick={()=>setLike(!like)}>
      <h1>  {like ? " ❤️ Liked" : "like 👍"}</h1>
     </button>
   </>


   
  )
}

export default State1
