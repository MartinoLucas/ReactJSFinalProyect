import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import CartContainer from '../containers/CartContainer'
import ItemDetailContainer from '../containers/ItemDetailContainer'
import ItemListContainer from '../containers/ItemListContainer'
import ShopProvider from '../context/ShopProvider'

const Navigation = () => {
  return (
    <ShopProvider >
      <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/detail/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartContainer/>}/>
            <Route path='*' element={<h2>Ruta no encontrada</h2>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ShopProvider>
  )
}

export default Navigation