import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import TopProducts from './Components/TopProducts';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import productsData from './Assets/productsData';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';


function App() {

  const [product, setProduct] = useState(null)

  const [Data, setData] = useState(productsData)
  const [cartData, setcartData] = useState(null)

const getProductData=(Data)=>{
setProduct(Data)
  
 
}

const getCartData=(item)=>{
  setcartData([...cartData,{item} ]);
}
// const getCartData = (item) => {
//   const quantity = 1
//   const totalprice = 0

//   const existingProduct = cartData.find(product => product.id === item.id);

//   if (existingProduct) {

//     setcartData(cartData.map(product =>
//       product.id === item.id ? { ...product, quantity: item.quantity + 1, } : product
//     ));
//   } else {
//     setcartData([...cartData, { ...product, quantity: 1 }]);
//   }

// };

  console.log('cartdata',cartData);
return(
 <div>
 <BrowserRouter>
 <Navbar/>
  <Routes>
<Route path='/' element={<TopProducts getProductData={getProductData} Data={Data} getCartData={getCartData}/>}/>
  <Route path='/ProductDetails' element={<ProductDetails product={product} />}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/Cart' element={<Cart cartData={cartData}/>}/>




  
    
  </Routes>
 </BrowserRouter>
 
 </div>
 
  
  );
}

export default App;
