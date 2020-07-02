import React, { useState, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { getMealByLetter, getMealByIngredients, getMealByName } from '../services/MealDBApi';
import { getDrinkByLetter, getDrinkByIngredients, getDrinkByName } from '../services/DrinkDBApi';
import Context from '../context/Context';

const fetchesMeals = {
  name: getMealByName,
  ingredient: getMealByIngredients,
  letter: getMealByLetter,
};

const fetchesDrinks = {
  name: getDrinkByName,
  ingredient: getDrinkByIngredients,
  letter: getDrinkByLetter,
};

const searchMD = async (filter, arg, location) => {
  const getMeal = fetchesMeals[filter];
  const getDrink = fetchesDrinks[filter];
  if (filter === 'letter' && arg.length > 1) {
    alert('Sua busca deve conter somente 1 (um) caracter');
  } else if (location.match(/comidas/g)) {
    const result = await getMeal(arg).then((response) => response.meals);
    return result;
  } else if (location.match(/bebidas/g)) {
    const result = await getDrink(arg).then((response) => response.drinks);
    return result;
  }
  return undefined;
};

const SearchBar = () => {
  const history = useHistory(); const location = useLocation();
  const [selected, setSelected] = useState('name');
  const [search, setSearch] = useState('');
  const { setCocktails, setMeals } = useContext(Context);
  const verifyReceived = (obj, type) => {
    const reconf = { comidas: 'idMeal', bebidas: 'idDrink' };
    history.push(`${location.pathname}/${obj[0][reconf[type]]}`);
  };
  const handleChange = async () => {
    let received = [];
    const type = location.pathname.slice(1, 8);
    const route = location.pathname;
    received = await searchMD(selected, search, route);
    if (!received) {
      return alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
    } else if (received.length === 1) {
      verifyReceived(received, type);
    }
    setCocktails(received); setMeals(received);
  };
  return (
    <div>
      <input
        type="text" data-testid="search-input"
        name="searchBar" onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <input
          type="radio" data-testid="ingredient-search-radio" key="Ingrediente"
          name="filter" onClick={() => setSelected('ingredient')}
        /><span>Ingrediente</span>
        <input
          type="radio" data-testid="name-search-radio" key="Nome"
          name="filter" onClick={() => setSelected('name')}
        /><span>Nome</span>
        <input
          type="radio" data-testid="first-letter-search-radio" key="PrimLetra"
          name="filter" onClick={() => setSelected('letter')}
        /><span>Primeira Letra</span>
      </div>
      <div>
        <button data-testid="exec-search-btn" onClick={() => handleChange()}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchBar;
