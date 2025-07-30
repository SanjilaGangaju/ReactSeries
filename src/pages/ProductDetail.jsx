import React from 'react'

import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
   const products = [{
        id: "01",
        "name": "Sunscreen",
        "detail": "Hydrating suncreen"
    },
{
    id:"02",
    "name": "Cleanser",
    "detail": "foaming cleanser"
}]
const ProductDetail = () => {
    const {id} =useParams()
    const location = useLocation();
    console.log(location)
    const product_detail = products.filter(item=>item.id==id)
  return (
    <>
      <div><h1>ProductDetail</h1>
      <h2>Product Id : {id}</h2>
      <h2>Product Name: {product_detail[0].name}</h2>
      {location.pathname=="/product/02"&& (<p>Product Detail: {product_detail[0].detail} </p> )}
 
       

      </div>

      <button><Link to="/product">All Products</Link></button>

    </>
  
  )
}

export default ProductDetail