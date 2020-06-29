import React, { useEffect, useContext } from 'react';
import Context from '../context/Context';

function Cocktails() {
  const {
    cocktails,
    loading,
    error,
    fetchCocktails,
  } = useContext(Context);

  useEffect(() => {
    fetchCocktails();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div id="cocktails">
      {
        cocktails.map((drinks) => {
          const {
            idCocktails,
            ingredient,
          } = drinks;
          return (
            <li key={idCocktails}>
              <img src={ingredient} width="120px" height="150px" alt="Cocktails Thumb" />
            </li>
          );
        })
      }
    </div>
  );
}

export default Cocktails;
