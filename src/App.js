import { useState } from 'react';
import Home from './Home'
import Blog from './Blog'
import Contacto from './Contacto'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';

function App() {
  const [vista, setVista] = useState('blog')
  return (


    <BrowserRouter>
      <nav>

        <p> <Link to="/home">Home</Link></p>
        <p> <Link to="/blog">Blog</Link></p>
        <p> <Link to="/contacto">Contacto</Link></p>
      </nav>



      <Route exact path="/blog" component={Blog} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/home" component={Home} />
    </BrowserRouter>





  );
}

export default App;
