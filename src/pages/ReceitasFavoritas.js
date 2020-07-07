import React, { useContext, useEffect } from 'react';
import DetailsContext from '../context/DetailsContext';
import FavoritesList from '../components/FavoritesList';
import Header from '../components/Header';
import './ReceitasFavoritas.css';

const handleClick = (favoriteRecipes, setFetchResult, value) => {
  if (value === 'mealdb') {
    const filtered = favoriteRecipes.filter((item) => item.isMeal === true);
    setFetchResult(filtered);
  } else if (value === 'cocktaildb') {
    const filtered = favoriteRecipes.filter((item) => item.isMeal === false);
    setFetchResult(filtered);
  } else {
    setFetchResult(favoriteRecipes);
  }
};

const searchBtn = (value, btnName, favoriteRecipes, setFetchResult) => (
  <button
    className="FavoriteSearchBtn"
    type="button"
    value={value}
    onClick={() => handleClick(favoriteRecipes, setFetchResult, value)}
  >
    {btnName}
  </button>
);

const ReceitasFavoritas = () => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  const {
    setFetchResult
  } = useContext(DetailsContext);

  useEffect(() => {
    setFetchResult(favoriteRecipes);
  }, []);

  return (
    <div>
      <Header />
      <div className="favoriteButtons">
        <button data-testid="filter-by-all-btn">{searchBtn('all', 'All', favoriteRecipes, setFetchResult)}</button>
        <button data-testid="filter-by-food-btn">{searchBtn('mealdb', 'Food', favoriteRecipes, setFetchResult)}</button>
        <button data-testid="filter-by-drink-btn">{searchBtn('cocktaildb', 'Drinks', favoriteRecipes, setFetchResult)}</button>
      </div>
      <div className="favoriteContainerPage">
        <FavoritesList />
      </div>
    </div>
  );
};

export default ReceitasFavoritas;

