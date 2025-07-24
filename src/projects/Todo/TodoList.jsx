import '../Todo/todo.css';
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';
export const TodoList = ()=>{
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([])

  
  const handleInputValue = (e) =>{
       setInputValue(e.target.value);
      
  }
  const handleSubmit=(e)=>{
    e.preventDefault();

    //empty input validaton
    if(!inputValue) return;

     //duplicate validation
    const duplicate = task.find((currTask)=>
        currTask.todo === inputValue)
    if (duplicate) {setInputValue("");
     return};
        
    
    const newTask = {todo: inputValue, checked:false, index: uuidv4()};
    
   
    
    setTask(prevTask=>[...prevTask, newTask]);

    
    setInputValue("");
  }
  const handleCheck=(value)=>{
   
    const updatedTask = task.map((todoItem)=>{
       if (todoItem.index === value.index){
          return {...todoItem, checked:!todoItem.checked};
          
       }
       else{ return todoItem};
      
    })
  setTask(updatedTask);

  }
  const handleDelete=(value)=>{
   
      const deleteTodo=task.filter((todoItem)=>{
        return todoItem.index != value.index;
         
       })
       
       
    setTask(deleteTodo);

    
       
  }
  const handleClearAll =()=>{
      setTask([]);
    }
  return (
  <>
  <div className="todo-container">
    <h1>Todo App</h1>
  <div className="todo-form--container">
   <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={handleInputValue}></input>
    <button type="submit">Add Todo</button>
   </form>
  </div>
  <div className="todo-lists">
    <ul>
      {task.map((currTask)=>{
        const {index, checked, todo}  = currTask;
        
           return (
           
              <li key ={index}>
                
                 <span className="todo-name" style={{ textDecoration: checked ? "line-through" : "none" }}>{todo}</span>
                
                  <button className="check-button" onClick={()=>handleCheck(currTask)}> <FaCheck /></button>
                  <button className="delete-button" onClick={()=>handleDelete(currTask)}><MdDelete /></button>

                
              </li>
           );

      })}
    </ul>
    <button className="clear-all" onClick={()=>handleClearAll()}>Clear All</button>
  </div>
  </div>
  
  </>
);

}