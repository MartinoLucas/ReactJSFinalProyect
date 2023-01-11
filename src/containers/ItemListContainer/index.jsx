import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import itemsJson from '../../data/items.json'
import ItemList from '../../components/ItemList'
import './styles.css'

const ItemListContainer = () => {

  

  //Setear el estado
  const [items, setItems] = useState([])

  //Capturar categoria a filtrar
  const {categoryId} = useParams()

  console.log(categoryId);

  //se ejecuta al montar los items
  useEffect(() => {

    //Traer los items
    const getItmes = () => {
      const obtenerItems = new Promise((res, rej) => {
        setTimeout(() => {
          res(itemsJson)
        }, 3000)
      });

      obtenerItems.then( response => {
        if(categoryId){
          const itemsByCategory = response.filter(item => item.category === categoryId)
          console.log(itemsByCategory);
          setItems(itemsByCategory)
        } else {
          setItems(response)
        }
      })
      .catch(error => console.log(error))
    };

    getItmes();
  }, [categoryId]);

  return (
    <div className='divItem'>
      <h2>Welcome back, settler!</h2>

      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer