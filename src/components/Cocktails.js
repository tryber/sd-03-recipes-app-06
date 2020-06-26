import React, { useEffect, useContext } from 'react';
import { GetCocktailsContext } from '../context/getCocktails';

function Cocktails() {
  const {
    // cocktails,
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
    <span>Cocktails</span>
  );
}

export default Cocktails;
