import { useState } from "react";
export const TodoForm = ({addTodo})=>{
    const [inputValue, setInputValue] = useState("");
    
    const handleInputValue = (e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!inputValue.trim()) return;

         addTodo(inputValue);

        setInputValue("");
       
    }
    return (
        <>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" autoComplete="off" value={inputValue} onChange={handleInputValue}></input>
                <button type="submit" className="add-todo">Add Todo</button>
            </form>
        </div>
        </>
    )
}