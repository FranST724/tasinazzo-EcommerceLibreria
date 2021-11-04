import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  const returnCount = (count) => {
  alert (count)
}
  return (
    <div>
      <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/'>
    <ItemListContainer greeting = 'Bienvenidos a mi tienda'/>
      </Route>
    <Route exact path='/categoria/:categoryId' component={ItemListContainer}/>
    <Route exact path='/categoria/:productId' component={ItemDetailContainer}/>
    </Switch>
    <ItemCount stock={6} initial={1} onAdd={returnCount}/>
    </BrowserRouter>
    </div>
  );
}

export default App;
