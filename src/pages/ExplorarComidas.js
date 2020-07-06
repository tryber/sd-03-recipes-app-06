import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExplorarComidas() {
  return (
    <div>
      <Header />
      <div>
        <p>Explorar Comidas</p>
        <Link to="/explorar/comidas/ingredientes">
          <button data-testid="explore-by-ingredient" type="button">
            Por ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button data-testid="explore-by-area" type="button">
            Por Local de origem
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button data-testid="explore-surprise" type="button">
            Me surpreenda!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
