import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Item({item}) {
  return (
    <div className='card' style={{width:'18rem'}}>
        <img src={item.image} alt={item.title} className='card-image-top'/>
        <div className='card-body'>
            <h5 className='card-title'>{item.title}</h5>
            <p className='card-text'>{item.description}</p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Read more</Link>
        </div>
    </div>
  )
}

export default Item