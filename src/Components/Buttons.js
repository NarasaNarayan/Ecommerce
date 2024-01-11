import React, { useState } from 'react'
import productsData from '../Assets/productsData';

const Buttons = ({menuitems,filterData,setData,activeButton}) => {
  const [all, setall] = useState(true)

  console.log('menu',);

  const searcFilterMenuData=(val)=>{
    
    setall(false)
    filterData(val)
  }
  const searcFilterMenuData1=()=>{
    setall(true)
    setData(productsData)
  }
 
  return (
    <div className='d-flex justify-content-center'>

<div class="ro">
  <div class="col">
  {
      menuitems.map((val)=>(
        <button onClick={()=>searcFilterMenuData(val)}  style={{backgroundColor:activeButton===val && all===false? 'red': ''  }} className='btn  text-white '>{val}</button>

      ))
    }
    <button onClick={()=>searcFilterMenuData1()}  style={{ backgroundColor:all ? 'red': '' }}  className='btn  text-white '>All</button>
  </div>
</div>
  


     
    </div>
  )
}

export default Buttons