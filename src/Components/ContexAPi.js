import React from 'react'
import { useContext } from 'react'
import { store } from '../App'

const ContexAPi = () => {
    const [state, setstate] = useContext(store)
  return (
    <div>
        Contax api {state}
    </div>
  )
}

export default ContexAPi