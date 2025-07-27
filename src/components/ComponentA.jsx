import React, { use } from 'react'
import { useContext } from 'react';
import { UserContext } from './UserContext';
const ComponentA = () => {
    const {user} = useContext(UserContext);
  return (
    <div>
      <h1>Name: {user.name}</h1>
    </div>
  )
}

export default ComponentA
