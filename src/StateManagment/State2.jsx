import { useState } from 'react';
import './State.css';

const State2 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [pass , setPass] = useState(false);

  return (
   <>
    <div className={darkMode ? "dark" : "light"}>

      <h1>Learning State 2 practice</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quasi, perferendis!
      </p>

      <h2>Text</h2>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

    </div>
    
    <input type={pass ? "text" : "password"} />
     <button onClick={()=>setPass(!pass)}>
        {pass ? "Hide" : "show"}
     </button>
   </>
    
  );
};

export default State2;
