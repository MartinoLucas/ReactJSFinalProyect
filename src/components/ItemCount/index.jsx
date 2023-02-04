import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'

const ItemCount = ({onAdd, initial}) => {

    //Setear el estado del conteo
    const [count, setCount] = useState(initial);

    //Suma
    const sumCount = () => {
        setCount(count + 1)
    }

    //Resta
    const restCount = () => {
        if (count >= 1) {
            setCount(count - 1)
        }
    }    

  return (
    <div className='grDiv'>
        <div className='bgDiv m-3'>
            <button className='btn btn-primary p-2 m-3 button' onClick={restCount}>-</button>
            <span>{count}</span>
            <button className='btn btn-primary p-2 m-3 button' onClick={sumCount}>+</button>
            <button className='btn btn-primary p-2 m-3 button' onClick={() => onAdd(count)}>Confirm inscription</button>
        </div>
    </div>
  )
    
}

export default ItemCount