import { UserContext } from "./UserContext";
import { useContext, useState } from "react";

 

export const ComponentB = ()=>{
    const {updateUser} = useContext(UserContext);
    const [newName, setNewName] = useState('');
    
    const handleSubmit = e=>{
        e.preventDefault()
        if (newName.trim()){
            updateUser(newName);
            setNewName("");
        }
    }

    return <div>
        <h2>Update USer Name</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value = {newName} onChange={e=>setNewName(e.target.value)}></input>
            <button type="submit">Update</button>
        </form>
    </div>
}
