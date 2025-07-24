import {TodoItems} from '../Todo/TodoItems';
export const TodoItemsWrapper = ({ task, handleCheck, handleDelete })=>{
  
    return (
       <div className="todo-lists">
        <ul>
           {task.map((currTask)=>{
              const { index, checked, todo }  = currTask;
           return( <TodoItems key={index} index={index} checked={checked} todo={todo} handleCheck={() => handleCheck(currTask)}  handleDelete={() => handleDelete(currTask)}></TodoItems>)
           })}
           </ul>
        
       </div>
         
    )
}