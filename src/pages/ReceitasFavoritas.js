import React from 'react';
import Header from '../components/Header';
// import './ReceitasFavoritas.css';

const searchBtn = (value, btnName) => (
  <button
    type="button"
    value={value}
    onClick={() => (value)}
  >
    {btnName}
  </button>
);

const ReceitasFavoritas = () => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  return (
    <article>
      <Header showSearch={false} />
      <div className="favoriteButtons">
        <button data-testid="filter-by-all-btn">{searchBtn('all', 'All', favoriteRecipes)}</button>
        <button data-testid="filter-by-food-btn">{searchBtn('mealdb', 'Food', favoriteRecipes)}</button>
        <button data-testid="filter-by-drink-btn">{searchBtn('cocktaildb', 'Drinks', favoriteRecipes)}</button>
      </div>
      <div className="favoriteContainerPage">
      </div>
    </article>
  );
};

export default ReceitasFavoritas;
