import { useState } from 'react';
import '../Todo/Todo.css';
export const Todo = ()=>{
   const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
   const handleInputChange = (value)=>{
    setInputValue(value);
   };
  
    const handleFormSubmit= (event)=>{
     event.preventDefault();
     if (!inputValue) return ;

     setTask((prevTask)=>{
           [... prevTask, inputValue];
     })
    }

    
    return (
        <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit ={handleFormSubmit}>
                    <div>
                         <input type='text' autoComplete="off" className="todo-input" value={inputValue} onChange={(event)=>{handleInputChange(event.target.value)}}></input>

                    </div>
                    <div>
                        <button type="submit" className="todo-button">Add task</button>
                    </div>
                </form>

            </section>
        </section>
        </>
    )
}
