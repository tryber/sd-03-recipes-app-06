export const LOGIN = 'USERLOGIN';

export const userLoginAction = (email, password) => ({
  type: LOGIN,
  email,
  password,
});
