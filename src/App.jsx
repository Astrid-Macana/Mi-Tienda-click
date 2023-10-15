
import './App.css';
import NavBar from './Components/Navbar'
import CarrucelPromo from './Components/CarrucelProductos';
import Producto from './Components/Producto';
import Home from './Components/Home';
import{BrowserRouter as Router}from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <CarrucelPromo/>
        <Producto/>
        <Home/>
      </Router>
    </div>
  );
}

export default App;
