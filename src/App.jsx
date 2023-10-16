
import './App.css';
import NavBar from './Components/Navbar'
import Home from './Components/Home';
import Productos from "./Components/Productos";
import Footer from './Components/footer';
import Registro from './Components/Registro';
import{BrowserRouter as Router}from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Home/>
        <Registro/>
        <Productos/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
