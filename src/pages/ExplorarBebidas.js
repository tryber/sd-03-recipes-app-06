import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getRandomDrinks } from '../services/DrinkDBApi';

function ExplorarBebidas() {
  const [id, setId] = useState('');

  const handleClick = () => {
    getRandomDrinks()
      .then((event) => setId(event.drinks[0].idDrink));
  };

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
        <button data-testid="explore-surprise" type="button" onClick={handleClick}>
          Me Surpreenda!
        </button>
        {id !== '' && <Redirect to={`/bebidas/${id}`} />}
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarBebidas;
