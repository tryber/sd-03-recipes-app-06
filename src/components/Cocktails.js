import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';
import Header from './Header';

function Cocktails() {
  const {
    cocktails,
    loading,
    fetchCocktails,
  } = useContext(Context);

  useEffect(() => {
    fetchCocktails();
  }, []);
  if (loading) return <div><Header /><div>Loading...</div></div>;

  return (
    <div id="cocktails">
      <Header />
      {
        cocktails.slice(0, 12).map((drinks) => {
          const {
            idDrink,
            strDrink,
            strIngredient1,
            strDrinkThumb,
          } = drinks;
          return (
            <li key={idDrink} id="list">
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
