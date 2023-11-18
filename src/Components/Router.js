import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'

 import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header'

function Router() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>

        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>

        </Routes>
    </BrowserRouter>
       
    </div>
  )
}

export default Router