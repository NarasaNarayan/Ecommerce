import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import TopProducts from './Components/TopProducts';
import {BrowserRouter,Routes,Route,} from 'react-router-dom'
import productsData from './Assets/productsData';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import ProductCarousel from './Components/ProductCarousel';


function App() {

  const [product, setProduct] = useState(null)

  const [Data, setData] = useState(productsData)
  const [cartData, setcartData] = useState([])

const getProductData=(Data)=>{
setProduct(Data)
  
 
}

const getCartData=(product)=>{

  const existingProduct=cartData.find(item=>item.id ===product.id);
  if(existingProduct){
    setcartData(cartData.map(item=>item.id ===product.id ?
      {...item, quantity:item.quantity+1}:product
      ));
  }
  else{
    setcartData([...cartData,{...product,quantity:1}]

    );
  }
}


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

  
      <Route path='/ProductCarousel' element={<ProductCarousel />}/>


      

  





  
    
  </Routes>
 </BrowserRouter>
 
 </div>
 
  
  );
}

export default App;
