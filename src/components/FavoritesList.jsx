import React from 'react';
import { Link } from 'react-router-dom';
import ShareButton from './ShareButton';
import FavButton from './FavButton';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

let copyUrl = false;
console.log(copyUrl);

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
) => (
  <div>
    {renderLink(type, id, image, index, name)}
    {renderCategory(index, type, area, category, alcoholicOrNot)}
    <button
      data-testid={`${index}-horizontal-share-btn`}
      src={shareIcon}
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(`${window.location.origin}/${type}s/${id}`);
        copyUrl = true;
        localStorage.removeItem(favoriteRecipes(`${id}`));
      }}
    >
      <ShareButton id={id} type={type} />
      <div>
        {copyUrl && <span>Link copiado!</span>}
      </div>
    </button>
    <button
      data-testid={`${index}-horizontal-favorite-btn`}
      src={blackHeartIcon}
      type="button"
      onClick={() => setRecipes(recipes.filter((element) => element.id !== id))}
    >
      <FavButton recipe={recipe} />
    </button>
  </div >
  );

const FavoritesList = ({
  recipe: { name, type, alcoholicOrNot, image, area, category, id },
  recipe,
  index,
  setRecipes,
  recipes,
}) => {
  return favoriteRecipes(
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
};

export default FavoritesList;
