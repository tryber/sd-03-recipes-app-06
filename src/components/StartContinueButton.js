import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';

const pathTranslate = {
  comida: 'meals',
  bebida: 'cocktails',
};

const recipeIsDone = (id, type) => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  if (doneRecipes) {
    if (doneRecipes.find((e) => e.id === id && e.type === type)) {
      return true;
    }
  }
  return false;
};

const StartContinueButton = () => {
  const { location } = useContext(DetailsContext);
  const [buttonText, setButtonText] = useState('Iniciar Receita');
  const [recipeDone, setRecipeDone] = useState(false);

  const verifyRecipeStatus = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const address = location.pathname;
    const searchKey = address.slice(1, 7);
    const searchId = address.slice(9, address.length);

    if (inProgressRecipes) {
      const arrayKeys = Object.keys(inProgressRecipes[pathTranslate[searchKey]]);
      if (arrayKeys.find((e) => e === searchId)) {
        setButtonText('Continuar Receita');
      }
    }
    setRecipeDone(recipeIsDone(searchId, searchKey));
  };

  useEffect(() => {
    verifyRecipeStatus();
  }, []);

  return (
    <div>
      { !recipeDone &&
      <Link to={`${location.pathname}/in-progress`}>
        <button
          name="bebida-btn" data-testid="start-recipe-btn"
          className="footer-btn"
        >{buttonText}</button>
      </Link>
      }
    </div>
  );
};

export default StartContinueButton;
