import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExplorarBebidas = () =>
  <div>
    <Header />
    <p>Esta é a página de Explorar Bebidas</p>
    <Link to="/explorar/bebidas/ingredientes">
    <button data-testid="explore-by-ingredient">Por ingredientes</button>
    </Link>
    <Link to="/explorar/bebidas/area">
    <button data-testid="explore-by-area">Por Local de origem</button>
    </Link>
    <Link to="/explorar/bebidas/area">
    <button data-testid="explore-surprise">Me surpreenda!</button>
    </Link>
    <Footer />
  </div>

export default ExplorarBebidas;
