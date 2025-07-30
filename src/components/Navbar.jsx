import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const navigate= useNavigate();

    const login=()=>{
       
    setisLoggedIn(true);
    navigate('/dashboard');
        
    }
    const logout=()=>{
        setisLoggedIn(false)
    }
  return (
    <div>
        <div className="left"><Link to='/'>React</Link></div>
        <div className="right">
            {isLoggedIn && (
            <>
           
            <Link to={'/dashboard'}>Dashboard</Link>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/product'}>Product</Link>
            <button style={{backgroundColor:"blue"}} onClick={logout}>Logout</button>
            </>)}
            {!isLoggedIn&&(<>
             <Link to={'/contact'}>Contact</Link>
             <button style={{backgroundColor: "red"}} onClick={login}>Login</button>
             <Link to={'/about'}>About</Link>
             
            </>)}
        </div>
    </div>
  )
}

export default Navbar