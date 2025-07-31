import React, { useContext } from 'react'
import MoneyContext from '../../context/MoneyContext'


const Person = () => {
    const data = (useContext(MoneyContext))
    
  return (
    <div>Person {data.money}</div>
  )
}

export default Person