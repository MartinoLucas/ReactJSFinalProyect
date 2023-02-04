import React, { createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {

  const [settlers, setSettlers] = useState([])

  const [quantity, setQuatity] = useState(0)

  const addSettlers = (settler) => {
    setSettlers([...settlers, settler])
  }

  const generateSettlerObject = ({
    name = "",
    lastName = "",
    age = 0
  }) => {
    return {
        settler: {
            name: name,
            lastName: lastName,
            age: age,
        },
        registredAt: new Date().toLocaleString()
    }
  }

  const countCart = () => {
    let cantidadTotal = 0;
    for (const settler of settlers) {
      cantidadTotal += settler.quantity
    }
    return cantidadTotal
  }

  return (
    <Shop.Provider value= {{settlers, addSettlers, generateSettlerObject, countCart, quantity, setQuatity}}>
      {children}
    </Shop.Provider>
  )
}

export default ShopProvider