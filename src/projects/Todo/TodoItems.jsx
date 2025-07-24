export const TodoItems = ()=>{
     return (
               
                  <li key ={index}>
                    
                     <span className="todo-name" style={{ textDecoration: checked ? "line-through" : "none" }}>{todo}</span>
                    
                      <button className="check-button" onClick={()=>handleCheck(currTask)}><MdCheck /></button>
                      <button className="delete-button" onClick={()=>handleDelete(currTask)}><MdDelete /></button>
    
                    
                  </li>
               );
}