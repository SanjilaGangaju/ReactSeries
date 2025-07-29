import { useReducer } from "react";
import React from 'react'
const initialState = {count: 0}
const counterReducer = (state, action) => {
    switch (action.type){
        case 'increment':
          return {count: state.count +1}  
        case 'decrement':
            return {count: state.count-1}
        case "incrementByAmount":
            return {count: state.count + action.playload};
        default:
            return state
    }
   
}

export default {counterReducer, initialState}
