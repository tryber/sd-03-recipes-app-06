
export async function getCokctailsByName(name) {
  const cocktails = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`).then((resp) => resp.json());
  return cocktails;
}


export async function getCocktailsList() {
  const CocktailsCategorieList = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then((resp) => resp.json);
  return CocktailsCategorieList;
}


export async function filterCocktailsByCategorie(categorie) {
  const CocktailsByCategorie = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categorie}`).then((resp) => resp.json);
  return CocktailsByCategorie;
}
