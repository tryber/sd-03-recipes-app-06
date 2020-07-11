import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { getAllMeals, getCountryList, getCountryFilter } from '../services/ExploreRecipes';

const fetchAreaList = async (setAreaList) => {
  const areaList = await getCountryList();
  setAreaList(areaList.meals.map(({ strArea }) => strArea));
};

const fetchMeals = async (setMeals, option) => {
  if (option === 'All') {
    const aux = await getAllMeals();
    setMeals(aux.meals);
    console.log('Meals = ', aux.meals);
  } else {
    const aux2 = await getCountryFilter(`${option}`);
    setMeals(aux2.meals);
  }
};

function cardReceitas(meals) {
  return (
    meals && meals.slice(0, 12).map((meal, index) => (
      <Link to={`/comidas/${meal.idMeal}`}>
        <div
          data-testid={`${index}-recipe-card`}
          key={`${meal}`}
        >
          <img
            src={`${meal.strMealThumb}`}
            alt={`${meal.strMeal}`}
            data-testid={`${index}-card-img`}
            width="120px"
            height="150px"
          />
          <p
            data-testid={`${index}-card-name`}
          >
            {`${meal.strMeal}`}
          </p>     
        </div>
      </Link>
    ))
  );
}

function ExplorarComidasArea() {
  const [areaList, setAreaList] = useState(undefined);
  const [meals, setMeals] = useState(undefined);
  const [option, setOption] = useState('All');

  useEffect(() => {
    fetchAreaList(setAreaList);
  }, []);

  useEffect(() => {
    fetchMeals(setMeals, option);
  }, [option]);

  if (!areaList) {
    return <h2>Carregando ...</h2>;
  }
  return (
    <div>
      <Header />
      <p>Explorar Comidas por Origem</p>
      <div>
        <select
          key="area"
          onChange={(event) => setOption(event.target.value)}
          data-testid="explore-by-area-dropdown"
        >
          <option value="All" data-testid="All-option">All</option>
          {areaList.map((country) => (
            <option
              key={country}
              value={country}
              data-testid={`${country}-option`}
            >
              {country}
            </option>
          ))}
        </select>
        {cardReceitas(meals)}
      </div>
      <Footer />
    </div>
  );
}

export default ExplorarComidasArea;
