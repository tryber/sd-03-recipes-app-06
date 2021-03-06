import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExploreIgredientsMealContext } from '../context/ExploreIgredientsMeal';

function ExplorarComidasIngredientes() {
  const { fetchIgredMeal, igredientsMeal, loading } = useContext(ExploreIgredientsMealContext);

  useEffect(() => {
    fetchIgredMeal();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <Header />
      <div>
        <ul>
          {igredientsMeal.slice(0, 12).map((igredient, index) => {
            const { idIngredient, strIngredient } = igredient;
            return (
              <Link to={`/comidas/filter/${strIngredient}`}>
                <li
                  data-testid={`${index}-ingredient-card`}
                  key={idIngredient}
                >
                  <img
                    src={`https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`}
                    alt=""
                    data-testid={`${index}-card-img`}
                  />
                  <div
                    data-testid={`${index}-card-name`}
                  >
                    {strIngredient}
                  </div>
                  -
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarComidasIngredientes;
