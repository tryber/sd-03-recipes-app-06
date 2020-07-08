import React, { useState, useContext, useEffect } from 'react';
import DetailsContext from '../context/DetailsContext';
import FavoritesList from '../components/FavoritesList';
import Header from '../components/Header';
import './ReceitasFavoritas.css';

const filterButtons = (setFilter) => {
  const handleClick = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="favoriteButtons">
      <button
        data-testid="filter-by-all-btn"
        type="button"
        className="btn"
        value=""
        onClick={(e) => handleClick(e)}
      >
        All
      </button>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        className="btn"
        value="comida"
        onClick={(e) => handleClick(e)}
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        className="btn"
        value="bebida"
        onClick={(e) => handleClick(e)}
      >
        Drinks
      </button>
    </div>
  );
};

const ReceitasFavoritas = () => {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const [setFilter] = useState('');
  const {
    setFetchResult,
  } = useContext(DetailsContext);

  useEffect(() => {
    setFetchResult(favoriteRecipes);
  }, []);

  return (
    <div>
      <Header />
      {filterButtons(setFilter)}
      <div className="favoriteContainerPage">
        <FavoritesList />
      </div>
    </div>
  );
};

export default ReceitasFavoritas;

