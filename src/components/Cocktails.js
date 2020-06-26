import React, { useEffect, useContext } from 'react';
import { GetCocktailsContext } from '../context/getCocktails';

function Cocktails() {
  const {
    cocktails,
    loading,
    error,
    fetchCocktails,
  } = useContext(GetCocktailsContext);

  useEffect(() => {
    fetchCocktails();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div id="cocktials">
      {
        cocktails.map((cocktail) => {
          const {
            search,
            ingredient,
            name,
            categorie,
          } = cocktail;
          return (
            <li key={search}>
              <img src={ingredient} width="120px" height="150px" alt="Meal Thumb" />
              {name} - {categorie}
            </li>
          );
        })
      }
    </div>
  );
}

export default Cocktails;
