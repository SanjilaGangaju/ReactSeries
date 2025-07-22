import { useState } from 'react';
import { useEffect } from 'react';


import '../Todo/Todo.css';
import { TodoForm } from './todoForm';
import { TodoList } from './Todolist';
import { DateTime } from './dateTime';
export const Todo = ()=>{
 
    const [task, setTask] = useState([]);

   
  
    const handleFormSubmit= (inputValue)=>{
    const {id, content, checked} = inputValue;
     if (!content) return ;
      
     const ifTodoContentMatched = task.find((currTask)=>{
        currTask.content == content;
     })
     if(ifTodoContentMatched) return;
    
     setTask((prevTask)=>
           [... prevTask, {id, content, checked}]);
  
    }
     
  //todo handledelete button
   const handleDeleteTodo=(value)=>{
    const updatedTask = task.filter((curTask)=> curTask.content != value);
    setTask(updatedTask);
   }


  // todo handle clear all button 
  const handleClearButton = ()=>{
    setTask([]);
  }

  // handle check todo
  const handleCheckedTodo = (content)=>{
        const updatedTask = task.map((curTask)=>{
        if (curTask.content == content){
            return {...curTask, checked: !curTask.checked};
        }else{
            return curTask;
        }
      });
       setTask(updatedTask);
  };
  

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
                        task.map((currTask)=>{
                           return <TodoList key={currTask.id} checked={currTask.checked} data={currTask.content} onHandleDeleteTodo = {handleDeleteTodo} onHandleCheckedTodo={handleCheckedTodo}></TodoList>
                        })
                    }
                </ul>
            </section>
          <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
        </section>
        </>
    )
}
