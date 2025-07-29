import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Form submitted:"+name+email+age)
    }
  return (
    <div>
        <h1>Form Handling</h1>
        <form onSubmit={handleSubmit}>
        <div>
            Name: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
        <div>
            Email: <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>
            Age : <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}></input>
        </div>
        <button type="submit">Submit</button>
        </form>
       
      
    </div>
  )
}

export default Form
