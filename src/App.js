import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer';

function App() {

  return (
    <div className='body'>
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
    </div>
  );
}

export default App;
