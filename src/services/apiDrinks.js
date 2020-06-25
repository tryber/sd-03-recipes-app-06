
export async function getDrinksByName(name) {
  const cocktail = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then((resp) => resp.json());
  return cocktail;
}


export async function getDrinksList() {
  const categorieList = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then((resp) => resp.json);
  return categorieList;
}


export async function filterByCategorie(categorie) {
  const DrinksByCategorie = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorie}`).then((resp) => resp.json);
  return DrinksByCategorie;
}
