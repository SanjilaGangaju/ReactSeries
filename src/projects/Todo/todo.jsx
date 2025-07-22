export const Todo = ()=>{
    return (
        <>
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form>
                    <div>
                         <input type='text' autoComplete="off" className="todo-input"></input>

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
