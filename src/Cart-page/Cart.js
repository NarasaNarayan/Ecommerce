import React from 'react'

const Cart = ({cart,removecart}) => {
  return (
    <div>
    <div>Shopping cart</div>
    
    {cart.map((item,index)=>(<div key={index}>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>Quantity{item.quantity}</li>

        <button onClick={()=>removecart(item)}>Remove</button>

    </div>))}
    </div>
  )
}

export default Cart