import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getDrinkByIngredients } from '../services/DrinkDBApi';

function FilterDrinks(props) {
  const { ing } = props.match.params;
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    getDrinkByIngredients(ing)
    .then((json) => setFilteredData([...json.drinks]));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <ul>
          {filteredData.map((drinks, index) => {
            const {
              idDrink,
              strDrink,
              strIngredient1,
              strDrinkThumb,
            } = drinks;
            return (
              <li data-testid={`${index}-recipe-card`} key={idDrink}>
                <img
                  data-testid={`${index}-card-img`} src={strDrinkThumb}
                  width="120px" height="150px" alt="Cocktails Thumb"
                />
                <div data-testid={`${index}-card-name`}>{strDrink}</div>
                -
                {strIngredient1}
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default FilterDrinks;

FilterDrinks.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};
