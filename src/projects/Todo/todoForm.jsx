export const TodoForm = ()=>{
    return (
        <>
        <div className="todo-form-container">
            <form>
                <input name="task" type="text"></input>
                <button type="submit">Add Todo</button>
            </form>
            
        </div>
        </>
    )
}