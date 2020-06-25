import { combineReducers } from 'redux';
import apiDrinksReducer from './apiDrinksReducer';
import userInfoReducer from './userInfoReducer';


const rootReducer = combineReducers({
  apiDrinksReducer,
  userInfoReducer,
});

export default rootReducer;
