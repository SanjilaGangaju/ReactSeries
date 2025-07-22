import { useState } from "react";

export const TodoForm = ({onAddTodo}) =>{
      const [inputValue, setInputValue] = useState({});
      const handleInputChange = (value)=>{
    setInputValue({id: value, content: value, checked: false});
   };

   const handleFormSubmit = (event) =>{
    event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({id: "", content: "", checked: ""});

   }
    return (<>
     <section className="form">
                    <form onSubmit ={handleFormSubmit}>
                        <div>
                             <input type='text' autoComplete="off" className="todo-input" value={inputValue.content} onChange={(event)=>{handleInputChange(event.target.value)}}></input>
    
                        </div>
                        <div>
                            <button type="submit" className="todo-button">Add task</button>
                        </div>
                    </form>
    
                </section>
    </>)
}