import React from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {

  const navigate = useNavigate();
  const Home =()=>{
    navigate('/')
  }
  const Previous = ()=>{
    navigate(-1)
  }
  return (
    <div>
      <button onClick={Home}>Go to Home</button>
      <button onClick={Previous}>Previous</button>
    </div>
  )
}

export default About