import React, { useEffect, useContext } from 'react';
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
            const { idIngredient, strDescription, strIngredient } = igredient;
            return (
              <li data-testid={`${index}-recipe-card`} key={idIngredient}>
                <div data-testid={`${index}-card-name`}>{strIngredient}</div>-
                {strDescription}
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarComidasIngredientes;
