import logo from './logo.svg';
import './App.css';
import Login from './views/pages/login';
import Home from './views/pages/home'
import Product from './views/components/Products';
import './views/styles/global.css'
import Cart from './views/pages/cart';
import Router from './views/routes';
import Header from './views/components/Header';

function App() {
  return (
    <div className="App">
     <Router />
    </div>
  );
}

export default App;
