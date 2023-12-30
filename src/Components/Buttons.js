import React from 'react'
import productsData from '../Assets/productsData';

const Buttons = ({menuitems,filterData,setData}) => {
  console.log('menu',);
 
  return (
    <div className='d-flex justify-content-center'>

    {
      menuitems.map((val)=>(
        <button onClick={()=>filterData(val)} className='btn  text-white '>{val}</button>

      ))
    }
    <button onClick={()=>setData(productsData)} className='btn  text-white '>All</button>
  


     
    </div>
  )
}

export default Buttons