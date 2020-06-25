import {
  RECEIVED_COCKTAIL, REQUEST_COCKTAIL, FAILED_COCKTAIL,
} from '../actions/apiCocktailActions';

const INITIAL_STATE = {
  cocktails: [],
  isLoading: true,
  error: '',
};

const apiCocktailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_COCKTAIL:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVED_COCKTAIL:
      return {
        ...state,
        cocktails: [...action.cocktails],
        isLoading: false,
      };
    case FAILED_COCKTAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default apiCocktailReducer;
