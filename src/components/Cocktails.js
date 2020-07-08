import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';

function Cocktails() {
  const {
    cocktails,
    loading,
    fetchCocktails,
  } = useContext(Context);

  useEffect(() => {
    fetchCocktails();
  }, []);
  if (loading) return <div>Loading...</div>;

  return (
    <div id="cocktails">
      {
        cocktails.slice(0, 12).map((drinks, index) => {
          const {
            idDrink,
            strDrink,
            strIngredient1,
            strDrinkThumb,
          } = drinks;
          return (
            <li data-testid={`${index}-recipe-card`} key={idDrink}>
              <img
                data-testid={`${index}-card-img`}
                src={strDrinkThumb}
                width="120px"
                height="150px"
                alt="Cocktails Thumb"
              />
              <div data-testid={`${index}-card-name`}>{strDrink}</div>
              -
              {strIngredient1}
            </li>
          );
        })
      }
    </div>
  );
}

export default Cocktails;
