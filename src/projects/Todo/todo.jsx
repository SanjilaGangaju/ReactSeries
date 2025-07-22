import { useState } from 'react';
import { useEffect } from 'react';


import '../Todo/Todo.css';
import { TodoForm } from './todoForm';
import { TodoList } from './Todolist';
import { DateTime } from './dateTime';
export const Todo = ()=>{
 
    const [task, setTask] = useState([]);

   
  
    const handleFormSubmit= (inputValue)=>{
     
     if (!inputValue) return ;

     if(task.includes(inputValue)) {
     return;
     }
     setTask((prevTask)=>
           [... prevTask, inputValue]);
  
    }
     
  //todo handledelete button
   const handleDeleteTodo=(value)=>{
    const updatedTask = task.filter((curTask)=> curTask != value);
    setTask(updatedTask);
   }


  // todo handle clear all button 
  const handleClearButton = ()=>{
    setTask([]);
  }

    return (
        <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
               <DateTime ></DateTime>
            </header>
           <TodoForm onAddTodo = {handleFormSubmit}></TodoForm>
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((currTask, index)=>{
                           return <TodoList keys={index} data={currTask} onHandleDeleteTodo = {handleDeleteTodo}></TodoList>
                        })
                    }
                </ul>
            </section>
          <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
        </section>
        </>
    )
}
