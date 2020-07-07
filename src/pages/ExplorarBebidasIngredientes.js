import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExploreIgredientsMealContext } from '../context/ExploreIgredientsMeal';

function ExplorarBedidasIngredientes() {
  const { fetchIgredDrink, igredientsDrink, loading } = useContext(ExploreIgredientsMealContext);

  useEffect(() => {
    fetchIgredDrink();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <Header />
      <div>
        <ul>
          {igredientsDrink.slice(0, 12).map((igredient, index) => {
            const { strIngredient1 } = igredient;
            return (
              <Link to={`/bebidas/filter/${strIngredient1}`}>
                <li data-testid={`${index}-ingredient-card`} key={strIngredient1}>
                  <img src={`https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png`} alt="" data-testid={`${index}-card-img`} />
                  <div data-testid={`${index}-card-name`}>{strIngredient1}</div>-
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

export default ExplorarBedidasIngredientes;
