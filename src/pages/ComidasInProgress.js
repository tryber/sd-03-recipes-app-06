import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

// const inProgress =  {
//   cocktails: {
//       178319: [],
//   },
//   meals: {
//       52771: ['chicken', 'pasta'],
//   }
// }

const pathConverter = {
  comida: 'meals',
  bebida: 'cocktails',
};

const ComidasInProgress = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname;
    const recipeId = path.slice(9, path.length - 12);
    console.log('recipeId: ', recipeId);
    const recipeType = pathConverter[path.slice(1, 7)];
    console.log('recipeType: ', recipeType);
    const saveMeal = {[recipeType]:{[recipeId]: []}};
    console.log('saveMeal: ', saveMeal);
    const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!inProgress) {
      localStorage.setItem('inProgressRecipes', JSON.stringify(saveMeal));
    } else if (inProgress[recipeType]) {
        if (!inProgress[recipeType][recipeId]) {
          inProgress[recipeType] = {...inProgress[recipeType], [recipeId]: []};
          localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
        }
    }
  }, []);

  return (
    <div>
      <p>Esta é a página de Comidas em Progresso</p>
    </div>
  );
};
  

export default ComidasInProgress;
