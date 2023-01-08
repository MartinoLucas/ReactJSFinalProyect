import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import itemsJson from '../../data/items.json'

function ItemDetailContainer() {

  //Setear el estado
  const [item, setItem] = useState({})

  //Capturar categoria a filtrar
  const {id} = useParams()

  console.log(id);

  //se ejecuta al montar los items
  useEffect(() => {

    //Traer los items
    const getItme = () => {
      const obtenerItem = new Promise((res, rej) => {
        setTimeout(() => {
          res(itemsJson)
        }, 3000)
      });

      obtenerItem.then( response => {
        if(id){
          const itemById = response.find(item => item.id.toString() === id)
          console.log(itemById);
          setItem(itemById)
        } 
      })
      .catch(error => console.log(error))
    };

    getItme();
  }, [id]);

  return (
    <ItemDetail item={item}/>
  )
}

export default ItemDetailContainer