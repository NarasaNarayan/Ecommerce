import React, { useState } from 'react'
import { useContext } from 'react'
import { store } from '../App'
const ContaxApi1 = () => {
    const [state, setstate] = useContext(store )
  return (
    <div>ContaxApi1 {state}
    <div></div>
    </div>
  )
}

export default ContaxApi1
