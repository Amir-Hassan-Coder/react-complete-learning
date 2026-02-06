import React from 'react'
import TestMain1 from './TestCom1/TestMain1'
import MainProps from './Props/MainProps'
import StateMain from './StateManagment/StateMain'
import MainForm from './Froms/MainForm'
import MainTodo from './Todo-App/MainTodo'
import MainUseEffect from './UseEffect-Hook-React-Js/MainUseEffect'
import MainRouter from './React-Router-Dom/MainRouter'
import MainDrilling from './PropsDrilling/MainDrilling'
import MainParent from './UseContaxt-Hook/MainParent'
import { createContext } from 'react'
export const UserContext = createContext();
  const App = () => {
  const name = "Amir khan"; 
  
  return (
 <>
 {/* <TestMain1/> */}
 {/* <MainProps/> */}
 {/* <StateMain/> */}
 {/* <MainForm/> */}
 {/* <MainTodo/> */}
 {/* <MainUseEffect/> */}
 {/* <MainRouter/> */}
 {/* <MainDrilling/> */}
 <UserContext.Provider value = {name}>
 <MainParent/>
 </UserContext.Provider>
 </>

  )
}

export default App
