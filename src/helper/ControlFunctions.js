const pathConverter = {
  comida: 'meals',
  bebida: 'cocktails',
};

let savedIng;

export const saveOnLocalStorage = (type, id, value) => {
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgress[type][id].find((e) => e === value)) {
    inProgress[type][id] = inProgress[type][id].filter((e) => e !== value);
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    return null;
  }
  inProgress[type][id].push(value);
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
  return null;
};

export const getSavedIng = (type, id) => {
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (inProgress) {
    savedIng = inProgress[type][id];
  }
};

export const isCheck = (value) => {
  if (savedIng) {
    if (savedIng.find((e) => e === value)) {
      return 1;
    }
    return 0;
  }
  return 0;
};

export const verifyLocalStorage = (path) => {
  const recipeId = path.slice(9, path.length - 12);
  const recipeType = pathConverter[path.slice(1, 7)];
  const saveMeal = { [recipeType]: { [recipeId]: [] } };
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (!inProgress) {
    localStorage.setItem('inProgressRecipes', JSON.stringify(saveMeal));
  } else if (inProgress[recipeType]) {
    if (!inProgress[recipeType][recipeId]) {
      inProgress[recipeType] = { ...inProgress[recipeType], [recipeId]: [] };
      localStorage.setItem('inProgressRecipes', JSON.stringify(inProgress));
    }
  }
};

export const getIngredients = (obj) => {
  let ingredientsArray = []; let measureArray = [];
  const keysArray = []; const valuesArray = []; const outputArray = [];
  ingredientsArray = [...Object.keys(obj).filter((e) => e.match(/strIngredient/g))];
  measureArray = [...Object.keys(obj).filter((e) => e.match(/strMeasure/g))];

  ingredientsArray.forEach((e) => {
    if (typeof (obj[e]) === 'string' && obj[e] !== '') {
      keysArray.push(obj[e]);
    }
  });

  measureArray.forEach((e) => {
    if (typeof (obj[e]) === 'string' && obj[e] !== '') {
      valuesArray.push(obj[e]);
    }
  });

  for (let i = 0; i < keysArray.length; i += 1) {
    outputArray.push({ [keysArray[i]]: valuesArray[i] });
  }
  return outputArray;
};

const verifyIsAlreadyRecipeDone = (act, newer) => {
  let actual = act;
  let actualized = false;
  actual.forEach((e, index) => {
    if (e.id === newer.id) {
      actual[index] = newer;
      localStorage.setItem('doneRecipes', JSON.stringify([...actual]));
      actualized = true;
    }
  });
  if (!actualized) {
    actual.push(newer);
    localStorage.setItem('doneRecipes', JSON.stringify([...actual]));
  }
};

export const writeDoneRecipes = async (obj) => {
  let previousDoneRecipe = await JSON.parse(localStorage.getItem('doneRecipes'));
  if (previousDoneRecipe) {
    verifyIsAlreadyRecipeDone(previousDoneRecipe, obj);
  }
  else {
    return localStorage.setItem('doneRecipes', JSON.stringify([obj]));
  }
};

export const readDoneRecipes = () => JSON.parse(localStorage.getItem('doneRecipes'));
