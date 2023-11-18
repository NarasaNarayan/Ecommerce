import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Api = () => {
    const [data,setdata]=useState([])
 useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/todos').then(res=> setdata(console.log(res.data)))
 },[])
  return (
    <div>


    </div>
  )
}

export default Api