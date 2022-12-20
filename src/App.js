import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  const name = "Lucas";

  return (
    <>
      <NavBar/>
      <ItemListContainer
      greeting={name} 
        />
    </>
  );
}

export default App;
