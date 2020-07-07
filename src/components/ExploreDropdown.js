import React, { useEffect, useState } from 'react';
import { getMeals, getRecipes } from '../services/MealDBApi';

const fetchAreas = async (setAreas) => {
  const area = await getMeals('list.php?a=list');
  setAreas(area.meals.map(({ strArea }) => strArea));
};
const fetchMeals = async (setMeals, area) => {
  if (area === 'Todos') {
    const meals = await getRecipes('random.php', 'meal', 'comidas');
    setMeals(meals);
  } else {
    const meals = await getMeals(`filter.php?a=${area}`);
    setMeals(meals.meals);
  }
};

const renderExplorer = (areas, setArea) => (
  <div>
    {areas &&
      <select
        key="area"
        onChange={(e) => setArea(e.target.value)}
        data-testid="explore-by-area-dropdown"
      >
        <option
        value="Todos"
        data-testid="todos-option"
        >
          Todos
        </option>
        {areas.map((area) => (
          <option
          key={area}
          value={area}
          data-testid={`${area}-option`}
          >
            {area}
          </option>
        ))}
      </select>}
  </div>
);
const ExplorerDropdown = () => {
  const [areas, setAreas] = useState(null);
  const [area, setArea] = useState('Todos');
  const [meals, setMeals] = useState(null);
  useEffect(() => {
    fetchAreas(setAreas);
  }, []);
  useEffect(() => {
    fetchMeals(setMeals, area);
  }, [area]);
  return renderExplorer(areas, meals, setArea);
};

export default ExplorerDropdown;
