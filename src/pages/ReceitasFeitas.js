import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';
import Header from '../components/Header';
import ShareButtonOnList from '../components/ShareButtonOnList';
import { readDoneRecipes } from '../helper/ControlFunctions';
import './ReceitasFeitas.css'

// commit inicial

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
  if (!doneRecipes) { return <div>Loading ...</div>;}
  return (
    <div className="DoneRecipes">
      <Header />
      <div className="SelectButtons">
        <button data-testid="filter-by-all-btn" onClick={() => changeState('All')}>All</button>
        <button data-testid="filter-by-food-btn" onClick={() => changeState('Food')}>Food</button>
        <button data-testid="filter-by-drink-btn" onClick={() => changeState('Drink')}>Drinks</button>
      </div>
      {useRecipe.map((e, index) =>
        <div className="DoneRecipesItem" key={e.name}>
          {<div className="RecipeCard">
            <div className="ThumbImage">
              <Link to={`/${e.type}s/${e.id}`}>
                <img data-testid={`${index}-horizontal-image`} src={e.image} height="100px" alt="Recipe" />
              </Link>
            </div>
            <div className="Information">
              <div className="Title">{e.area && <span data-testid={`${index}-horizontal-top-text`}>{`${e.area} - ${e.category}`}</span>}
                {e.area && <ShareButtonOnList testid={`${index}-horizontal-share-btn`} location={`/comidas/${e.id}`} />}</div>
              <div className="Title">{!e.area && <p data-testid={`${index}-horizontal-top-text`}>{`${e.alcoholicOrNot}`}</p>}
              {!e.area && <ShareButtonOnList testid={`${index}-horizontal-share-btn`} location={`/bebidas/${e.id}`} />}</div>
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
