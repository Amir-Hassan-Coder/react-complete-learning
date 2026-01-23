// import React from 'react'
// import Prop1 from './Prop1'
// import Button from './Button'

// const MainProps = () => {
//     const testFun = ()=>{
//         alert("Login is Working Good")
//     }

//      const login = ()=>{
//         alert("Logic is Working Good")
//     }
//     // const array = ["Amir khan" , "Jandal Khan" , "Fahad Khan"]
//   return (
//    <>
//    <h1>Learning Props In React Js</h1>
//    {/* <Prop1 name = "Jandal" age = {21} array = {array} /> */}
//    <Button label = "Click ME Jandal" test = {testFun}/>
//      <Button label = "Login Now" test = {login}/>
//    </>
//   )
// }

// export default MainProps










import React from 'react'
import PropsA2 from './PropsA2'

const MainProps = () => {
    const isLogin = true;
  return (
  <>
  <PropsA2 isLogin = {isLogin}/>
  </>
  )
}

export default MainProps

