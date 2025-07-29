import React from 'react'
import { useReducer, useState } from 'react';
 import {counterReducer, initialState} from "../counterReducer";
const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState(0)

    const handleIncrement = () => dispatch({type: 'increment'});
    const handleDecrement = () => dispatch({type: 'decrement'});
  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Increment</button>
      <button>Increment</button>
    </div>
  )
} 

export default Counter
