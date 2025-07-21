import { useState } from "react";

// const users = [
//     {name: "Alice", age: 25},
//     {name: "Bob" , age: 12},
//     {name:"Fen" , age: 25},
//     {name: "Foz" , age: 30},
// ]
export const DerivedState = ()=>{
    const [users, setUsers] = useState([
         {name: "Alice", age: 25},
    {name: "Bob" , age: 12},
    {name:"Fen" , age: 25},
    {name: "Foz" , age: 30},
    ]);
    return (
        <>
          <div className="main-div">
            <h1>Users List</h1>
            <ul>
                 {users.map((item, index)=>{
                return <li key={index}>{item.name} - {item.age} yrs old</li>
            })}
           
            
            </ul>
          
            
          </div>

        </>
    );
}