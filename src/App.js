import Home from './Home'
import Blog from './Blog'
import Contacto from './Contacto'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';

function App() {

  return (

    <BrowserRouter>
      <nav>
        <p> <Link to="/home">Home</Link></p>
        <p> <Link to="/blog">Blog</Link></p>
        <p> <Link to="/blog/MLA902519065">Samsung</Link></p>
        <p> <Link to="/blog/MLA912338372">Alcatel </Link></p>
        <p> <Link to="/contacto">Contacto</Link></p>
      </nav>

      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/:entrada" component={Blog} />
      <Route path="/contacto" component={Contacto} />
      <Route path="/home" component={Home} />
    </BrowserRouter>





  );
}

export default App;
