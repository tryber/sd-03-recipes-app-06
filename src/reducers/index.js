import { combineReducers } from 'redux';
import apiCocktailReducer from './apiCocktailReducer';
import userInfoReducer from './userInfoReducer';


const rootReducer = combineReducers({
  apiCocktailReducer,
  userInfoReducer,
});

export default rootReducer;
