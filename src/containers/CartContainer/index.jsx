import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import Loader from '../../components/Loader'
import { Shop } from '../../context/ShopProvider'
import { db } from '../../firebase/config'
import generateOrderObject from '../../Services/generateOrderObject'
import './styles.css'

/**
 * 
 * @param {onAdd} onAdd Function que agrega al carrito de compra
 * @param {loader} loader Estado que imprime el loader de manera condicional
 * @returns CartContainer
 */

const CartContainer = () => {

  //Traer de ShopProvider
  const {settlers, cleanCart} = useContext(Shop);

  //Setear estado del loader
  const [loader, setLoader] = useState(false)

  //Setear inputs
  const [name, setName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState(0)

  //Function ConfirmPurchase
  const confirmPurchase = async () => {
    try {
      setLoader(true)

      const order = generateOrderObject({
        name: name,
        lastName: lastname,
        email: email,
        numSett: settlers[0].quantity
      })

      const docRef = await addDoc(collection(db,"orders"), order)

      cleanCart()

      Swal.fire({
        title: '<strong>Successfully added to the queue</strong>',
        html:
        `<p>${settlers[0].quantity} settlers have been added to the queue, you will have to continue the inscription in person</p><p>Your inscription number is: <b>${docRef.id}</b> </p>`,
        showCloseButton: true,
      })
    } catch (error) {
      Swal.fire({
        title: '<strong>An error has occurred</strong>',
        html:
        `<p>Error: ${error}</p>`,
        showCloseButton: true,
      })
    } finally {
      setLoader(false)
    }
  }

  return (
    <> {settlers.length !== 0 ?
      
      loader ?
      <Loader/>
      : <>  
            <h3 className='textForm'>You will be added to queue to continue the inscription in person.</h3>
            <h4 className='textForm'>Complete the following information to be added to queue:</h4>
            {<form onSubmit={
                  e => {e.preventDefault()
                  setEmail(e.target.email.value)
                  setLastName(e.target.lastname.value)
                  setName(e.target.name.value)
                }}>
                         <label className='form-label'>
                            Name
                            <input type='text' name='name' required className='form-control'></input>
                          </label>
                         <label className='form-label'>
                            Lastname
                            <input type='text' name='lastname' required className='form-control'></input>
                          </label>
                         <label className='form-label'>
                            Email of the responsible
                            <input type='email' name='email' required className='form-control'></input>
                          </label>
                          <button type='submit' onClick={(e) => {
                            e.preventDefault()
                            confirmPurchase()}} className='btn btn-primary p-2 m-3 buttonContinue'>Confirm inscription</button>
                       </form>
              }
              <h5 className='textForm'>The total amount of your shop for {settlers[0].quantity} settler is: ${30 * settlers[0].quantity}.000</h5>
              <p className='textForm'>$30.000 for each</p>
        </>
      
      : <>
          <h4>Settlers not added yet</h4>
          <button className='btn btn-primary p-2 m-3 buttonContinue'><Link to='/' className='link'>Go home</Link></button>
      </>
    }
    </>
  )
}

export default CartContainer