import './App.css';
import {useState  } from 'react';
import Product from './Cart-page/Product';
import Cart from './Cart-page/Cart';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './Components/Login';



function App() {
  const [cart, setcart] = useState([]);
 
  const addtocart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {

      // If product is already in the cart, update the quantity instead of adding a duplicate
      setcart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // If product is not in the cart, add it to the cart with quantity 1
      setcart([...cart, { ...product, quantity: 1 }]);
    }
  };


 const products=[
  {id:1, name:'moboile',price:200,disc:'this is mi mobiles'},
  {id:2, name:'Tv',price:300,disc:'this is mi tv'}

 ]

 const removecart=(product)=>{
  
const updtedcart=cart.filter(item=>item.id !==product.id)
setcart(updtedcart)
 }
  return (
   <div>

  {products.map((product)=>(<Product key={product.id} product={product} addtocart={addtocart} />))}

<Cart cart={cart} removecart={removecart}/>

<Login/>
   </div>
  );
}

export default App;
