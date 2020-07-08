import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/Context';
import DrinkCategories from './DrinkCategories';

function Cocktails() {
  const {
    cocktails,
    loading,
    fetchCocktails,
  } = useContext(Context);

  useEffect(() => {
    fetchCocktails();
  }, []);

  return (
    <div className="cocktails">
      <DrinkCategories />
      <ul>
        { !loading &&
          cocktails.slice(0, 12).map((drinks, index) => {
            const { idDrink, strDrinkThumb, strDrink, strCategory } = drinks;
            return (
              <div data-testid={`${index}-recipe-card`} className="card" key={idDrink}>
                <Link to={`bebidas/${idDrink}`}>
                  <li>
                    <img
                      data-testid={`${index}-card-img`} src={strDrinkThumb}
                      width="120px" height="150px" alt="Drink Thumb"
                    />
                    <p data-testid={`${index}-card-name`}>{strDrink} - {strCategory}</p>
                  </li>
                </Link>
              </div>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Cocktails;
