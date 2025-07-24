import '../Todo/todo.css';

import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react';
import { TodoForm } from './TodoForm';
import { TodoItemsWrapper } from './TodoItemsWrapper';
export const TodoWrapper = ()=>{
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
  };
  const handleCheck=(value)=>{
   
    const updatedTask = task.map((todoItem)=>{
       if (todoItem.index === value.index){
          return {...todoItem, checked:!todoItem.checked};
          
       }
       else{ return todoItem};
      
    })
  setTask(updatedTask);

  };
  const handleDelete=(value)=>{
   
      const deleteTodo=task.filter((todoItem)=>{
        return todoItem.index != value.index;
         
       })
       
       
    setTask(deleteTodo);

    
       
  };
  const handleClearAll =()=>{
      setTask([]);
    };
    return (
    <div className="todo-container">
        <h1>Todo App</h1>
        <TodoForm inputValue={inputValue} handleInputValue={handleInputValue} handleSubmit={handleSubmit}></TodoForm>
        <TodoItemsWrapper task={task} handleCheck={handleCheck} handleDelete={handleDelete}></TodoItemsWrapper>
        <button onClick={handleClearAll}>Clear All</button>
    </div>
    
    )
}
