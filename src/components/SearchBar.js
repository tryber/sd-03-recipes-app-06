import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMealByLetter, getMealByIngredients, getMealByName } from '../services/MealDBApi';
import { getDrinkByLetter, getDrinkByIngredients, getDrinkByName } from '../services/DrinkDBApi';

const SearchBar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState('name');
  const [search, setSearch] = useState('');

  const mealtSearch = async (filter, arg) => { 
    if (filter === 'name') {
      const result = await getMealByName(arg).then((response) => response.meals);
      console.log(result);
    } else if (filter === 'ingredient') {
      const result = await getMealByIngredients(arg).then((response) => response.meals);
      console.log(result);
    } else if (filter === 'letter' && arg.length === 1) {
      const result = await getMealByLetter(arg).then((response) => response.meals);
      console.log(result);
    } else {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };
/*
  const drinkSearch = async (filter, arg) => {
    if (filter === 'name') {
      const result = await getDrinkByName(arg).then((response) => response.drinks);
      console.log(result);
    } else if (filter === 'ingredient') {
      const result = await getDrinkByIngredients(arg).then((response) => response.drinks);
      console.log(result);
    } else if (filter === 'letter' && arg.length === 1) {
      const result = await getDrinkByLetter(arg).then((response) => response.drinks);
      console.log(result);
    } else if (filter === 'letter') {
      alert('Sua busca deve conter somente 1 (um) caracter');
    }
  };
*/
  const handleChange = () => {
    if (location.pathname.match(/comidas/g)) { mealtSearch(selected, search); }
    // if (location.pathname.match(/bebidas/g)) { drinkSearch(selected, search); }
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
