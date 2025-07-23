export const TodoTemplate= ({children}) =>{
    return (
        <>
        <section className="todo-template">
            <div className="todo-container">
                <h1>Todo App</h1>
                {children}
            </div>
        </section>

        </>
    )
}