import React from 'react'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Product from './pages/Product'
// import ProductDetail from './pages/ProductDetail'
// import Navbar from './components/Navbar'
// import Dashboard from './pages/Dashboard'
// import Profile from './pages/Profile'
// import Central from './components/propsdrillling/Central';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counterSlice'
const App = () => {
   const counter = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  return (
 
    <div>
      {/* <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Central></Central>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>

      </Router> */}
      <h1>{counter}</h1>
      <button onClick={()=>dispatch(increment())}>Increase</button>
      <button>Decrease</button>

    </div>
  )
}

export default App