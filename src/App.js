import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import TopProducts from './Components/TopProducts';
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import productsData from './Assets/productsData';
import ProductDetails from './Components/ProductDetails';
import Cart from './Components/Cart';
import Footer from './Components/Footer';
import OurAdvantages from './Components/OurAdvantages';
import SignUp from './Components/SignUp';
import Multicorousel from './Components/Multicorousel';
import Specification from './Components/Specification';


function App() {

  const [product, setProduct] = useState(null)
  const [number, setnumber] = useState(0)
  // filtered data
  const [Data, setData] = useState(productsData)
  const [loadedpredata, setloadedpredata] = useState(false)
  const [cartData, setcartData] = useState([])
  const [activeButton, setactiveButton] = useState(null)
  const [user, setuser] = useState({})
  const [islogin, setislogin] = useState(false)
  


  useEffect(() => {
    loadData()
  } )

  let loadData = () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'))
    console.log(user);
    if (user !== null) {
      setuser(user)
      setislogin(true)
    }
  }


  const getProductData = (Data) => {
    setProduct(Data)
  }

  // useEffect(() => {
  // if(!loadedpredata){
  //   setmenuitems([...new Set(Data.map(item => item.category))])

  //   setloadedpredata(true)

  //   }
  // }, [menuitems])
  //  const menuitems=[new Set(Data.map(item=>item.category))]

  const menuitems = [...new Set(productsData.map(item => item.category))]

  const getCartData = (product) => {
    const totalPrice = 0;

    const existingProduct = cartData.find(item => item.id === product.id);
    if (existingProduct) {
      setcartData(cartData.map(item => item.id === product.id ?
        { ...item, quantity: item.quantity + 1 } : product
      ));
      alert('Already added product to cart')

    }
    else {
      setcartData([...cartData, { ...product, quantity: 1 }]


      );
      alert('added product to cart')

      setnumber(number + 1)

    }
  }


  const increment = (product) => {

    setcartData(cartData.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));

  }

  const decrement = (product) => {
    const quantity = product.quantity - 1

    if (quantity == 0) {
      cartData.findIndex((item, index) => {
        if (item.id === product.id) {
          cartData.splice(index, 1)
        }
      })
    }
    setcartData(cartData.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    ));
    setnumber(0)
  }

  const deleteHandler = (product) => {
    const updatedcart = cartData.filter(item => item.id !== product.id);
    setcartData(updatedcart)
    setnumber(number - 1)
    alert('product removed from cart')
  }
  const filterData = (val) => {
    const newItems = productsData.filter(item => item.category === val)
    setData(newItems)
    setactiveButton(val)
  }


  const handleLogout = () => {
    setuser({})
    setislogin(false)
  }


  return (
    <div>
      <BrowserRouter>
        <Navbar number={number} getProductData={getProductData} islogin={islogin} />
        <Routes>
          <Route path='/' element={<TopProducts activeButton={activeButton} getProductData={getProductData} Data={Data} getCartData={getCartData} menuitems={menuitems} setData={setData} filterData={filterData} />} />

          <Route path='/ProductDetails' element={<ProductDetails product={product} getCartData={getCartData} getProductData={getProductData} />} />

          <Route path='/Login' element={<Login />} />
          
          <Route path='/Cart' element={<Cart cartData={cartData} increment={increment} decrement={decrement} deleteHandler={deleteHandler} />} />

          <Route path='/Multicorousel' element={<Multicorousel getProductData={getProductData} Data={Data} getCartData={getCartData} menuitems={menuitems} setData={setData} filterData={filterData}/>} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Specification' element={<Specification getProductData={getProductData} Data={Data} getCartData={getCartData} menuitems={menuitems} setData={setData} filterData={filterData}/>} />
         
        </Routes>

        <OurAdvantages />
        <Footer />
      </BrowserRouter>

    </div>


  );
}

export default App;
