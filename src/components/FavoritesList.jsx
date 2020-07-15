import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const renderLink = (type, id, image, index, name) => (
  <Link to={`${type}s/${id}`}>
    <img alt="recipe" src={image} data-testid={`${index}-horizontal-image`} width="80px" />
    <span data-testid={`${index}-horizontal-name`}>{name}</span>
  </Link>
);

const renderCategory = (index, type, area, category, alcoholicOrNot) => (
  <span data-testid={`${index}-horizontal-top-text`}>
    {type === 'comida' ? `${area || ''} - ${category}` : alcoholicOrNot}
  </span>
);

const favoriteRecipes = (
  name,
  type,
  alcoholicOrNot,
  image,
  area,
  category,
  id,
  index,
  recipe,
  setRecipes,
  recipes,
) =>
  (
    <div>
      {renderLink(type, id, image, index, name)}
      {renderCategory(index, type, area, category, alcoholicOrNot)}
      <button
        data-testid={`${index}-horizontal-share-btn`}
        src={shareIcon}
        type="button"
        onClick={() => {
          navigator.clipboard.writeText(`${window.location.origin}/${type}s/${id}`);
          document.getElementsByClassName('msg').innerHTML = 'Link copiado!';
        }}
      >
        <img src={shareIcon} alt="compartilhar" id={id} type={type} />
      </button>
      <span className="msg">Link copiado!</span>
      <button
        data-testid={`${index}-horizontal-favorite-btn`}
        src={blackHeartIcon}
        type="button"
        onClick={() => {
          setRecipes(recipes.filter((element) => element.id !== id));
          // localStorage.removeItem(favoriteRecipes(`${id}`));
        }}
      >
        <img src={blackHeartIcon} alt="coração" recipe={recipe} />
      </button>
    </div >
  );

const FavoritesList = (
  {
    recipe: { name, type, alcoholicOrNot, image, area, category, id },
    recipe,
    index,
    setRecipes,
    recipes,
  }) =>
  favoriteRecipes(
    name,
    type,
    alcoholicOrNot,
    image,
    area,
    category,
    id,
    index,
    recipe,
    setRecipes,
    recipes,
  );

export default FavoritesList;
