import React from 'react'
import './Test.css'
const Conditions = () => {
    const isTest = true;
    const isVisi = isTest ? 'visi' : 'unvisi';
    const isAdmin = true;
    const hasAccount = false;
    const marks = 42;
    const isDarkMode = true;
  return (

   <>
    <h1 className={isVisi}>Conditional Rendering in React JS</h1>
    {isAdmin ? <h1>Yes Admin</h1> : <h2>Uuser</h2>}
    
     <div className="acc">
        {hasAccount ? <h2>Login</h2> : <h2>Create Account</h2>}
     </div>

     <div className="marks-test">
        {marks >= 45 ? <h2>Grade A</h2>:<h2>Fail</h2>}
     </div>

      <div className="mode-test">
        {isDarkMode  ? <h2>Dark mode On</h2>:<h2>Light Mode On</h2>}
     </div>
   </>
  )
}

export default Conditions
