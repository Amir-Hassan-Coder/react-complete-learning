import React, { useContext } from 'react'
// import { appContaxt } from '../App'
// import { authContaxt } from '../App'
import { themChange } from '../App'
const ChalidB = () => {
    // const {name,age,course} = useContext(appContaxt);
    // const {islogin , user} = useContext(authContaxt)
    const {theme,setTheme} = useContext(themChange)
  return (
  <>
    {/* <h2>Chalid B my name is {name} and age = {age} inrolled course = {course}</h2>
   <h2>
    {islogin ? `wellcome ${user}` : "plaz login"}
   </h2> */}

    <div
      style={{
        background: theme === "dark" ? "black" : "white",
        color: theme === "dark" ? "white" : "black",
        height: "100vh"
      }}
    >
      <h1>{theme} Mode</h1>

     <button onClick={()=>setTheme(theme === 'dark' ? 'light' : 'dark')}>{
        theme == 'dark' ? "light" : "dark"
        }</button>
    </div>
    </>
 
  )
}

export default ChalidB
