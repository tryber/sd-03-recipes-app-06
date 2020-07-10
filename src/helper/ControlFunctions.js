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
