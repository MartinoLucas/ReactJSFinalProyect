import React from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/ItemList'
import Loader from '../../components/Loader'
import useFirebase from '../../hooks/useFirebase'
import './styles.css'

const ItemListContainer = () => {

  //Traer de ShopProvider
  const {categoryId} = useParams()

  //Destructuring de useFirebase
  const [items, loader, error] = useFirebase(categoryId)

  return (
    <>
      {error && <h2>We are sorry, an error occurred: {error}</h2>}
      {
        loader ?
        <Loader/>
        : <div className='divItem'>
          <h2>Welcome back, settler!</h2>
          <ItemList items={items}/>
        </div>
      }
    </>
  )
}

export default ItemListContainer