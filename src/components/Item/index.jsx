import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

function Item({item}) {
  return (
    // <div className='card' style={{width:'18rem'}}>
    //     <img src={item.image} alt={item.title} className='card-image-top'/>
    //     <div className='card-body'>
    //         <h5 className='card-title'>{item.title}</h5>
    //         <p className='card-text'>{item.description}</p>
    //         <Link to={`/detail/${item.id}`} className='btn btn-primary'>Read more</Link>
    //     </div>
    // </div>
    <div className="card text-bg-dark cardItem">
      <img src={item.image} className="card-img" alt={item.title}/>
      <div className="card-img-overlay overLay">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <Link to={`/detail/${item.id}`} className='btn btn-primary'>Read more</Link>
        {/* <p class="card-text"><small>Last updated 3 mins ago</small></p> */}
      </div>
    </div>
  )
}

export default Item