import React, { useState } from "react";

const MainTodo = () => {
  const [addTodo, setAddTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("value is : ", setTodos , addTodo);
     if (addTodo) {
        setTodos([...todos , {
            text:addTodo,
            completed:false
        }])
        setAddTodo('');
     }
  };

  const handelDelete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index.completed]
    setTodos(newTodos);
  };

  return (
    <>
     <div className="container">
         <h1>Add Your Daily Tasks ✔️ 🛒 {addTodo}</h1>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={addTodo}
          onChange={(e) => setAddTodo(e.target.value)}
          placeholder="Enter new Task"
        />
       <button>Submit Task</button>
      </form>

      <ul>
        {todos.map((todo , index)=>(
            <li key={index}>
                <span style={{textDecoration : todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                <button onClick={()=>handelDelete(index)}>Delete Task ✂️</button>
            </li>
        ))}
      </ul>
     </div>

    </>
  );
};

export default MainTodo;

// https://chat.whatsapp.com/BVBURmlK6b02QGsl8p0jD7
// idm group link 