import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

/**
 * 
 * @param {Item} Item Generate the card of each item
 * @returns Item
 */

function Item({item}) {
  return (
    <div className="card text-bg-dark cardItem">
      <img src={item.image} className="card-img" alt={item.title}/>
      <div className="card-img-overlay overLay">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <Link to={`/detail/${item.id}`} className='btn btn-primary'>Read more</Link>
      </div>
    </div>
  )
}

export default Item