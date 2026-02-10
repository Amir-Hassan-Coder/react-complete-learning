import React, { createContext, useState } from 'react'
import TestMain1 from './TestCom1/TestMain1'
import MainProps from './Props/MainProps'
import StateMain from './StateManagment/StateMain'
import MainForm from './Froms/MainForm'
import MainTodo from './Todo-App/MainTodo'
import MainUseEffect from './UseEffect-Hook-React-Js/MainUseEffect'
import MainRouter from './React-Router-Dom/MainRouter'
import MainDrilling from './PropsDrilling/MainDrilling'

import MAinContaxt from './Use-Contaxt-hook/MAinContaxt'
import UseMamo from './USermamo-hook/UseMamo';
import TodoList2 from './TodoApp2/TodoList2';
// export const authContaxt = createContext();
export const themChange = createContext();
  const App = () => {
  //  const name = "Amir khan";
  //  const age = 21;
  //  const course = "React js"
  const [theme , setTheme] = useState('light');
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
 {/* <appContaxt.Provider value={{name,age,course}}> */}
{/* <MAinContaxt/> */}
 {/* </appContaxt.Provider> */}

 {/* <authContaxt.Provider value={{islogin:false , user:"Amir"}}>
<MAinContaxt/>
 </authContaxt.Provider> */}

  {/* <themChange.Provider value={{theme,setTheme}}>
<MAinContaxt/>
 </themChange.Provider>  */}

 {/* <UseMamo/> */}
 <TodoList2/>
 </>

  )
}

export default App
