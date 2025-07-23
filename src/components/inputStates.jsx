import { useState } from "react"

export const InputStates = ()=>{
      const [inputs, SetInputs] = useState({name: "", email:""});
      const {name, email} = inputs;

      const handleOnChange = (e)=>{
        const {value, name} = e.target;
        SetInputs({...inputs, [name]:value})
      }
    return (
        <>
        <input name="name" value={name} onChange={handleOnChange}></input>
        <input name="email" value={email} onChange={handleOnChange}></input>
        </>
    )
}
