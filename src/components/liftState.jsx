import { useState } from "react";

export const LiftingState = () =>{
    const [inputValue, setInputValue] = useState("");
    return (<>
       <InputComponent inputValue={inputValue} setInputValue={setInputValue}></InputComponent>
        <DisplayComponent inputValue ={inputValue}></DisplayComponent>

    </>)
};
 const InputComponent =({inputValue, setInputValue})=>{
  
    return( <>
    <input type="text" placeholder ="enter your name"  onChange ={(e)=> setInputValue(e.target.value)} value={inputValue}></input>
    </>)
 }

const DisplayComponent = ({inputValue})=>{
    return( <p>The current input value is : {inputValue}</p>);
}