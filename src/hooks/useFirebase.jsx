import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

const useFirebase = (categoryId) => {
    
  //Setear el estado
  const [items, setItems] = useState([])
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState("")

  //se ejecuta al montar los items
  useEffect(() => {

    //Import Firebase
    try {

     setLoader(true)
      const getPosts = async () => {

        let querySnapshot;
        if (categoryId) {
          const postsRef = collection(db, "posts");
          const q = query(postsRef, where("category", "==", categoryId));
          querySnapshot = await getDocs(q);
        } else {
          querySnapshot = await getDocs(collection(db, "posts"))
        }
  
        const postsFirebase = [];
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          const post = {
            id: doc.id,
            ...doc.data()
          }
          postsFirebase.push(post)
        });
        setItems(postsFirebase);
        setLoader(false)
      };

      getPosts();

    } catch (error) {
      setError(error.message)
    }


  }, [categoryId]);

  return[items, loader, error]
}

export default useFirebase