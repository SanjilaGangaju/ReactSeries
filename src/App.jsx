import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/product/:id" element={<ProductDetail></ProductDetail>}></Route>
        </Routes>

      </Router>
    </div>
  )
}

export default App