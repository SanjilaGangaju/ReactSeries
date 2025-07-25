export const TodoForm = ({ inputValue, handleInputValue, handleSubmit })=>{
     return (
        <div className="todo-form--container">
          <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleInputValue}></input>
           <button type="submit">Add Todo</button>
          </form>
        </div>
     )
}