import MoneyContext from "./MoneyContext";
import React, { useState } from 'react'

const MoneyState = (props) => {
    const money = 20000;
    const [counter, setCounter] =useState(0);
  return (
    <MoneyContext.Provider value={{money, counter, setCounter}}>{props.children}</MoneyContext.Provider>
  )
}

export default MoneyState