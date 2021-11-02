import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { ItemCount } from './components/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const returnCount = (count) => {
  alert (count)
}
  return (
    <div>
    <NavBar />
    <ItemListContainer greeting = 'Bienvenidos a mi tienda'/>
    <ItemCount stock={6} initial={1} onAdd={returnCount}/>
    </div>
  );
}

export default App;
