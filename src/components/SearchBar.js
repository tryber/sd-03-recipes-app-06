import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMealByLetter, getMealByIngredients, getMealByName } from '../services/MealDBApi';
import { getDrinkByLetter, getDrinkByIngredients, getDrinkByName } from '../services/DrinkDBApi';

const SearchBar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState('name');
  const [search, setSearch] = useState('');

  const mealtSearch = () => {
    if (selected === 'name') {
      const result = getMealByName(search);
      console.log(result);
    } else if (selected === 'ingredient') {
      const result = getMealByIngredients(search);
      console.log(result);
    } else if (selected === 'letter' && search.length === 1) {
      const result = getMealByLetter(search);
      console.log(result);
    } else if (selected === 'letter' && search.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    } 
  };

  const drinkSearch = () => {
    if (selected === 'name') {
      const result = getDrinkByName(search);
      console.log(result);
    } else if (selected === 'ingredient') {
      const result = getDrinkByIngredients(search);
      console.log(result);
    } else if (selected === 'letter' && search.length === 1) {
      const result = getDrinkByLetter(search);
      console.log(result);
    } else if (selected === 'letter' && search.length > 1) {
      alert('Sua busca deve conter somente 1 (um) caracter');
    } 
  };

  const handleChange = () => {
    if (location.pathname.match(/comidas/g)) {
      mealtSearch();
    } else if (location.pathname.match(/bebidas/g)) {
      drinkSearch();
    }
  };

  return (
    <div>
      <input type="text" data-testid="search-input" name="searchBar" onChange={(e) => setSearch(e.target.value)} />
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
