
export async function getCokctailsByName(name) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    .then((resp) => resp.json());
}

export async function getCocktailsList() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((resp) => resp.json);
}


export async function filterCocktailsByCategorie(categorie) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorie}`)
    .then((resp) => resp.json);
}

export async function getCocktailsByLetter(search) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`)
    .then((resp) => resp.json());
}

export async function getCocktailsByIngredient(search) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${search}`)
    .then((resp) => resp.json());
}

export async function getCocktailsByID(id) {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((resp) => resp.json());
}

export async function getCocktailsIngredientImage(ingredient) {
  return fetch(`https://www.thecocktaildb.com/images/ingredients/${ingredient}.png`)
    .then((resp) => resp.json());
}
