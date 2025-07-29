import React from 'react'
import { useEffect, useState } from 'react';
function UseEffect() {
  const [counter, setCounter] =useState(0)
 useEffect(() => {
   document.title=counter;
 
 
 }, [counter])
 
  return (
    <div>
      <h1>Learning useEffect</h1>
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>
    </div>
)
}

export default UseEffect
