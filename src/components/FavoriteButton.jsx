import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import EmptyHeartIcon from '../images/whiteHeartIcon.svg';
import FullyHeartIcon from '../images/blackHeartIcon.svg';

function handleClick(recipe) {
  let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteRecipes) {
    if (favoriteRecipes.some((el) => el.id === recipe.id)) {
      favoriteRecipes = favoriteRecipes.filter((item) => item.id !== recipe.id);
      return localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    }
    return localStorage.setItem('favoriteRecipes', JSON.stringify([...favoriteRecipes, recipe]));
  }
  return localStorage.setItem('favoriteRecipes', JSON.stringify([recipe]));
}

const FavoriteButton = ({ recipe }) => {
  const [favorited, setFavorited] = useState(false);
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  return (
    <button
      className="icon-button"
      type="button"
      onClick={() => {
        setFavorited(!favorited);
        handleClick(recipe);
      }}
    >
      {
        !favorited
          ? (
            <img
              className="icons"
              src={EmptyHeartIcon}
              alt="heart icon"
              data-testid="favorite-btn"
            />
          )
          : (
            <img
              className="icons"
              src={FullyHeartIcon}
              alt="heart icon"
              data-testid="favorite-btn"
            />
          )
      }
    </button>
  );
};

FavoriteButton.propTypes = {
  recipe: PropTypes.instanceOf(Object),
};

FavoriteButton.defaultProps = {
  recipe: {},
};

export default FavoriteButton;
