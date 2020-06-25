import {
  RECEIVED_DRINKS, REQUEST_DRINKS, FAILED_DRINKS,
} from '../actions/apiDrinksActions';

const INITIAL_STATE = {
  cocktails: [],
  isLoading: true,
  error: '',
};

const apiDrinksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_DRINKS:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVED_DRINKS:
      return {
        ...state,
        cocktails: [...action.cocktails],
        isLoading: false,
      };
    case FAILED_DRINKS:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default apiDrinksReducer;
