import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import Header from '../components/Header';
import ShareButtonOnList from '../components/ShareButtonOnList';
import { readDoneRecipes } from '../helper/ControlFunctions';

const handleClick = (name) => {
  if (name === 'Food') {
    return 'comida';
  } else if (name === 'Drink') {
    return 'bebida';
  }
  return 'All';
};

const ReceitasFeitas = () => {
  const { copyUrl } = useContext(DetailsContext); const [showType, setShowType] = useState('All');
  const doneRecipes = readDoneRecipes(); let useRecipe;
  const changeState = (buttonName) => {
    const setter = handleClick(buttonName);
    setShowType(setter);
  };
  if (showType !== 'All') {
    useRecipe = doneRecipes.filter((e) => e.type === showType);
  } else if (showType === 'All') {
    useRecipe = doneRecipes;
  }
  return (
    <div>
      <Header />
      <div className="SelectButtons">
        <button data-testid="filter-by-all-btn" onClick={() => changeState('All')}>All</button>
        <button data-testid="filter-by-food-btn" onClick={() => changeState('Food')}>Food</button>
        <button data-testid="filter-by-drink-btn" onClick={() => changeState('Drink')}>Drinks</button>
      </div>
      {useRecipe.map((e, index) =>
        <div className="DoneRecipesItem" key={e.name}>
          {<div className="RecipeCard">
            <Link to={`/${e.type}s/${e.id}`}>
              <div className="ThumbImage">
                <img data-testid={`${index}-horizontal-image`} src={e.image} height="120px" alt="Recipe" />
              </div>
            </Link>
            <div className="information">
              {e.area && <p data-testid={`${index}-horizontal-top-text`}>{`${e.area} - ${e.category}`}</p>}
              {!e.area && <p data-testid={`${index}-horizontal-top-text`}>{`${e.alcoholicOrNot}`}</p>}
              {e.area && <ShareButtonOnList testid={`${index}-horizontal-share-btn`} location={`/comidas/${e.id}`} />}
              {!e.area && <ShareButtonOnList testid={`${index}-horizontal-share-btn`} location={`/bebidas/${e.id}`} />}
              {copyUrl && <span>Link copiado!</span>}
              <Link to={`/${e.type}s/${e.id}`}>
                <p data-testid={`${index}-horizontal-name`}>{e.name}</p>
              </Link>
              <p data-testid={`${index}-horizontal-done-date`}>Feito em: {e.doneDate}</p>
              {e.area && e.tags.map((el) =>
                <span key={el} data-testid={`${index}-${el}-horizontal-tag`}>{el}</span>)}
            </div>
          </div>}
        </div>)}
    </div>
  );
};

export default ReceitasFeitas;
