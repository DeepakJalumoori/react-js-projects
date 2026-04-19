import { useState } from "react";
import "../style.css";

const Todo = () => {
  const [task,setTask] = useState([]);
  const [input,setInput] = useState("");

  const addTask = () =>{
    setTask((prevTask) => [...prevTask,input])
    setInput("")
  };

  const removeTask = (index) => {
    setTask((tasks) => tasks.filter((task, i) => i !== index));
  }
  return (
    <div className="container">
      <h1>Todo List</h1>
      <input
       type="text" 
       placeholder="Add new task"
       value={input}
       onChange={(e) => {setInput(e.target.value)}}
       />
       <button onClick={addTask}>Add</button>

       <ul className="todo-list">
        {
          task.map((currentTask,index) => (
            <li key={index} className="todo">
              <span>{currentTask}</span>
              <button onClick={() => removeTask(index)}>X</button>
            </li>
          ))
        }
       </ul>
    </div>
  )
}

export default Todo;