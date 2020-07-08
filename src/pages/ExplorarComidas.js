import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getRandomMeals } from '../services/MealDBApi';

function ExplorarComidas() {
  const [id, setId] = useState('');

  const handleClick = () => {
    getRandomMeals()
      .then((event) => setId(event.meals[0].idMeal));
  };

  return (
    <div>
      <Header />
      <div>
        <p>Explorar Comidas</p>
        <Link to="/explorar/comidas/ingredientes">
          <button data-testid="explore-by-ingredient" type="button">
            Por Ingredientes
          </button>
        </Link>
        <Link to="/explorar/comidas/area">
          <button data-testid="explore-by-area" type="button">
            Por Local de Origem
          </button>
        </Link>
        <button data-testid="explore-surprise" type="button" onClick={handleClick}>
          Me Surpreenda!
        </button>
        {id !== '' && <Redirect to={`/comidas/${id}`} />}
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarComidas;
