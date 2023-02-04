import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import { Link } from 'react-router-dom';

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
                <button className='btn btn-primary p-2 m-3' onClick={restCount}>-</button>
                <span>{count}</span>
                <button className='btn btn-primary p-2 m-3' onClick={sumCount}>+</button>
                <button className='btn btn-primary p-2 m-3' onClick={() => onAdd(count)}><Link to='/cart' className='link'>Add settlers information</Link></button>
            </div>
        </div>
  )
    
}

export default ItemCount