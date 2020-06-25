import apiCocktails from '../services/apiDrinks';

export const REQUEST_COCKTAIL = 'REQUEST_API_COCKTAIL';
export const RECEIVED_COCKTAIL = 'RECEIVED_API_COCKTAIL';
export const FAILED_COCKTAIL = 'FAILED_COCKTAIL';

const cocktailRequest = () => ({
  type: REQUEST_COCKTAIL,
});

const cocktailReceived = (data) => ({
  type: RECEIVED_COCKTAIL,
  cocktails: data.results,
});

const cocktailFailed = (error) => ({
  type: FAILED_COCKTAIL,
  error,
});

export function getCocktails() {
  return (dispatch) => {
    dispatch(cocktailRequest());
    return apiCocktails()
      .then(
        (cocktailBD) => dispatch(cocktailReceived(cocktailBD)),
        (error) => dispatch(cocktailFailed(error)),
      );
  };
}
