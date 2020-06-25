import apiDrinks from '../services/apiDrinks';

export const REQUEST_DRINKS = 'REQUEST_API_DRINKS';
export const RECEIVED_DRINKS = 'RECEIVED_API_DRINKS';
export const FAILED_DRINKS = 'FAILED_DRINKS';

const drinksRequest = () => ({
  type: REQUEST_DRINKS,
});

const drinksReceived = (data) => ({
  type: RECEIVED_DRINKS,
  cocktails: data.results,
});

const drinksFailed = (error) => ({
  type: FAILED_DRINKS,
  error,
});

export function getDrinks() {
  return (dispatch) => {
    dispatch(drinksRequest());
    return apiDrinks()
      .then(
        (cocktailBD) => dispatch(drinksReceived(cocktailBD)),
        (error) => dispatch(drinksFailed(error)),
      );
  };
}
