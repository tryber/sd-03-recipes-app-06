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
        cocktails.slice(0, 12).map((drinks) => {
          const {
            idDrink,
            strDrink,
            strIngredient1,
            strDrinkThumb,
          } = drinks;
          return (
            <li key={idDrink}>
              <img src={strDrinkThumb} width="120px" height="150px" alt="Cocktails Thumb" />
              {strDrink}
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
