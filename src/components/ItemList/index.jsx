import React from 'react'
import { Link } from 'react-router-dom';
import Item from '../Item'
import './styles.css'

function ItemList({items}) {

  //Mostrar Loader
  const card = React.createRef();

  const loader = () => {
    setTimeout(()=>{
      card.current.style.display='none';
    }, 3000)
  }

  loader();

  return (
    <>
      <h4>Check out what have we done this week!</h4>

      <div className="card cardLoader" aria-hidden="true" ref={card}>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <Link to="/" tabindex="-1" className="btn btn-primary disabled placeholder col-6"></Link>
        </div>
      </div>

      <div className='listContainer'>
          {items.map((item)=>{
              return <Item item={item} key={item.id}/>
          })}
      </div>
    </>
  )
}

export default ItemList