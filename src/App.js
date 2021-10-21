import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div>
    <NavBar />
    <ItemListContainer greeting = 'Hola y bienvenidos'/>
    </div>
  );
}

export default App;
