import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarBebidas() {
  return (
    <div>
      <Header />
      <div>
        <p>Explorar Bebidas</p>
        <Link to="/explorar/bebidas/ingredientes">
          <button data-testid="explore-by-ingredient" type="button">
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/bebidas/area">
          <button data-testid="explore-surprise" type="button">
            Me Surpreenda!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarBebidas;
