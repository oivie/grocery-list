import './App.css';
import imageShop from './shop.jpg';
import imageMan from './man.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <img src={ imageShop } width='200px' alt='shopping'/>
      </div>

      <div className='container'>
              <h1>Grocery List</h1>
      </div>

      <GroceryList />

      <div className='container'>
              <img src={ imageMan } width='200px' alt='man'/>
      </div>
    </div>
  );
}

export default App;
