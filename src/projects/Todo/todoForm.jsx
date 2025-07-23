import { useState } from "react";
export const TodoForm = ()=>{
    const [inputValue, setInputValue] = useState({
        task: ""});
    const {task} = inputValue;
    const handleInputValue = (e)=>{
     
        setInputValue({...inputValue, task: e.target.value});
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      setInputValue({task: ""})
    }
    return (
        <>
        <div className="todo-form-container">
            <form onSubmit = {handleSubmit}>
                <input name="task" type="text" value={task} autoComplete="off" onChange={handleInputValue}></input>
                <button type="submit">Add Todo</button>
            </form>
            
        </div>
        </>
    )
}