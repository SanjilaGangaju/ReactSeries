import { useState } from 'react';
import { MdCheck} from "react-icons/md";
import { MdDeleteForever } from 'react-icons/md';
import '../Todo/Todo.css';
export const Todo = ()=>{
   const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const  [dateTime, setDateTime] = useState("");
   const handleInputChange = (value)=>{
    setInputValue(value);
   };
  
    const handleFormSubmit= (event)=>{
     event.preventDefault();
     if (!inputValue) return ;

     if(task.includes(inputValue)) {
     setInputValue("");
     return;
     }
     setTask((prevTask)=>
           [... prevTask, inputValue]);
     setInputValue("");
    }
     
    useEffect(()=> {
          const interval = setInterval(()=>{
      const now = new Date();
          const formattedDate = now.toLocaleDateString();
          const formattedTime = now.toLocaleTimeString();
          setDateTime(`${formattedDate} -${formattedTime}`);
   }, 1000);
   return ()=> clearInterval(interval);
    }, [])
 
    return (
        <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
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
            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((currTask, index)=>{
                            return <li key={index} class="todo-item">
                                <span>{currTask}</span>
                                <button className='check-btn'><MdCheck/></button>
                                <button className='delete-btn'><MdDeleteForever/></button>
                            </li>
                        })
                    }
                </ul>
            </section>
        </section>
        </>
    )
}
