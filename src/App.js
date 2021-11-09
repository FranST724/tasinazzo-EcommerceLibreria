import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer'
import Nosotros from './components/Nosotros';

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
    <ItemListContainer/>
      </Route>
    <Route exact path='/categoria/:categoryId' component={ItemListContainer}/>
    <Route exact path='/producto/:productId' component={ItemDetailContainer}/>
    <Route exact path='/nosotros' component={Nosotros}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
