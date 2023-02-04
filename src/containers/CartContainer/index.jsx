import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import Loader from '../../components/Loader'
import { db } from '../../firebase/config'
import generateOrderObject from '../../Services/generateOrderObject'

const CartContainer = () => {

  const [loader, setLoader] = useState(false)

  const confirmPurchase = async () => {
    try {
      setLoader(true)

      const order = generateOrderObject({
        name:"",
        lastName:"",
        age:0,
        email:"",
        total:0
      })

      const docRef = await addDoc(collection(db,"orders"), order)
      console.log(docRef.id);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false)
    }
  }

  return (
    <>
      {
        loader ?
        <Loader/>
        : <button onClick={confirmPurchase}>Hola</button>
        
      }
    </>
  )
}

export default CartContainer