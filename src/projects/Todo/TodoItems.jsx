
import { MdCheck, MdDelete } from "react-icons/md";
import '../Todo/todo.css';
export const TodoItems = ({ checked, todo, handleCheck, handleDelete })=>{
   
     return (
            <li>
                
                <span className="todo-name" style={{ textDecoration: checked ? "line-through" : "none" }}>{todo}</span>
                    
               <button className="check-button" onClick={handleCheck}><MdCheck /></button>
                <button className="delete-button" onClick={handleDelete}><MdDelete /></button>
    
                    
            </li>
            );
}