import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
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
  return (
    <div>
        <h1>Product Detail</h1>
        <div>{products.map(item=><li key={item.id}><Link to={`/product/${item.id}`}>{item.name}</Link></li>)}</div>
    </div>
  )
}

export default Product