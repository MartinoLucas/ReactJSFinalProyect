import React from 'react'
import Item from '../Item'
import './styles.css'

function ItemList({items}) {

  return (
    <>
      <h4>Check out what have we done this week!</h4>

      <div className='listContainer'>
          {items.map((item)=>{
              return <Item item={item} key={item.id}/>
          })}
      </div>
    </>
  )
}

export default ItemList