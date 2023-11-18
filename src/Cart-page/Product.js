import React from 'react'

const Product = ({product,addtocart}) => {
  return (

    <div key={product.id}>
    <li>{product.name}</li>
    <li>{product.price}</li>
<button onClick={()=>addtocart(product)}>addtocart</button>

    </div>
  )
}

export default Product;