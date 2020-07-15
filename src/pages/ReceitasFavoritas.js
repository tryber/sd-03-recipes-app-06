import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FavoritesList from '../components/FavoritesList';
import './ReceitasFavoritas.css';

const filterButtons = (setFilter) => {
  const handleClick = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div className="margin-top-70p">
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

const displayRecipes = (filter, recipes, page, setRecipes) => (
  <div>
    {recipes
      .filter((recipe) => {
        if (filter) {
          return recipe.type === filter;
        }
        return true;
      })
      .map((recipe, index) => (
        <FavoritesList
          recipes={recipes}
          recipe={recipe}
          page={page}
          index={index}
          setRecipes={setRecipes}
        />
      ))}
  </div>
);

const ReceitasFavoritas = ({ title, page }) => {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem(page))) {
      setRecipes(JSON.parse(localStorage.getItem(page)));
    }
  }, [page]);
  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(recipes));
  }, [recipes]);
  return (
    <div>
      <Header title={title} searchEnabled={false} />
      {filterButtons(setFilter)}
      {displayRecipes(filter, recipes, page, setRecipes)}
    </div>
  );
};

ReceitasFavoritas.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default ReceitasFavoritas;
