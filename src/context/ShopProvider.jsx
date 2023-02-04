import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {

  //Set settlers empty array
  const [settlers, setSettlers] = useState([])

  //Set quantity
  const [quantity, setQuatity] = useState(0)

  //Function addSettlers
  const addSettlers = (settler) => {
    setSettlers([...settlers, settler])
  }

  //Function set quantity in cart
  const countCart = () => {
    let cantidadTotal = 0;
    for (const settler of settlers) {
      cantidadTotal += settler.quantity
    }
    return cantidadTotal
  }

  //Function clearCart
  const cleanCart = () => {
    setSettlers([])
    setQuatity(0)
  }

  return (
    <Shop.Provider value= {{settlers, addSettlers, countCart, quantity, setQuatity, cleanCart}}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider