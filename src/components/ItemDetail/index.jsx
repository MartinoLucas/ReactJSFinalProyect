import React, { useContext} from 'react'
import ItemCount from '../../components/ItemCount'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { Shop } from '../../context/ShopProvider'
import { Link } from 'react-router-dom'
import ItemDetailInfo from '../ItemDetailInfo'

function ItemDetail({item}) {

  // const [sett, setSett] = useState({})

  const {addSettlers, settlers, setQuatity, quantity} = useContext(Shop)

  const onAdd = (cantidad) => {
    console.log(`Se agregaron ${cantidad} settlers`);
    setQuatity(cantidad)
    addSettlers({...settlers, quantity: cantidad})
  }

  // const createSettler = () => {

  // }

  return (
    <>
      <ItemDetailInfo
        item={item}/>

      { quantity === 0 ?

        <div className='addSettlers'>
          <h4>Inscribí a tus hijos en JAC, ¡¡para que aprendan jugando!!</h4>
          <div>
            <h6 className='m-3'>Cantidad de nuevos colonos:</h6>
            <ItemCount
              initial={1}
              onAdd={onAdd}/>
          </div>
        </div>
           
         : <Link to="/cart" className='btn btn-primary p-2 m-3 buttonContinue'>Continue with register</Link>
      }
    </>
  )
}

export default ItemDetail