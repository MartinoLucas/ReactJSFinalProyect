import React from 'react'
import ItemCount from '../../components/ItemCount'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

function ItemDetail({item}) {
  return (
    <>
      <div className='container'>
        <img src={item.image} alt={item.title} />
        <div className='textContainer'>
          <h2>{item.title}</h2>
          <p className='m-3'>{item.description}</p>
        </div>
      </div>
      <hr />
      <div className='addSettlers'>
        <h4>Inscribí a tus hijos en JAC, ¡¡para que aprendan jugando!!</h4>
        <h6 className='m-3'>Cantidad de nuevos colonos:</h6>
        <ItemCount/>
      </div>
    </>
  )
}

export default ItemDetail