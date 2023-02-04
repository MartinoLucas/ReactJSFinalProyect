import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase/config';

function ItemDetailContainer() {

  //Setear el estado
  const [item, setItem] = useState({})
  const [err, setErr] = useState("")

  //Capturar categoria a filtrar
  const {id} = useParams()

  //se ejecuta al montar los items
  useEffect(() => {

    const getPosts = async () => {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const postDetail = {
          id: docSnap.id,
          ...docSnap.data()
        }
        setItem(postDetail)
      } else {
        setErr("Such document does not exist.")
      };
    };

    getPosts();

  }, [id]);

  return (
    <>
      {
        Object.keys(item).length === 0 ?
        <h3>{err}</h3>
        : <ItemDetail item={item}/>
      }
    </>
  )
}

export default ItemDetailContainer