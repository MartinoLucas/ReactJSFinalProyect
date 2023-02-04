import React from 'react'

const ItemDetailInfo = ({item}) => {
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
    </>
  )
}

export default ItemDetailInfo