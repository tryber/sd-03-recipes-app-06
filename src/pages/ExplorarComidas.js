import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExplorarComidas = () =>
  <div>
    <Header />
    <p>Esta é a página de Explorar Comidas</p>
    <Link to="/explorar/comidas/ingredientes">
      <button data-testid="explore-by-ingredient">Por ingredientes</button>
    </Link>
    <Link to="/explorar/comidas/area">
      <button data-testid="explore-by-area">Por Local de origem</button>
    </Link>
    <Link to="/explorar/comidas/area">
      <button data-testid="explore-surprise">Me surpreenda!</button>
    </Link>
    <Footer />
  </div>;

export default ExplorarComidas;
