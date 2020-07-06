import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import DetailsContext from '../context/DetailsContext';

const pathTranslate = {
  comidas: 'meals',
  bebidas: 'cocktails',
};

const StartContinueButton = () => {
  const { location } = useContext(DetailsContext);
  const [buttonText, setButtonText] = useState('Iniciar Receita');

  const verifyRecipeStatus = () => {
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    const address = location.pathname;
    const searchKey = address.slice(1, 8);
    const searchId = address.slice(9, address.length);

    if (inProgressRecipes) {
      const arrayKeys = Object.keys(inProgressRecipes[pathTranslate[searchKey]]);
      if (arrayKeys.find((e) => e === searchId)) {
        setButtonText('Continuar Receita');
      }
    }
    return buttonText;
  };

  useEffect(() => {
    verifyRecipeStatus();
  }, []);

  return (
    <Link to={`${location.pathname}/in-progress`}>
      <button
        name="bebida-btn" data-testid="start-recipe-btn"
        className="footer-btn"
      >{buttonText}</button>
    </Link>
  );
};

export default StartContinueButton;
