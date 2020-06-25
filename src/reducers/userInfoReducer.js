import { LOGIN } from '../actions/userLoginAction';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const userInfoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };
    default:
      return state;
  }
};

export default userInfoReducer;
