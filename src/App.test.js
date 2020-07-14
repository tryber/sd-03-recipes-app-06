import React from 'react';
import renderWithRouter from './tests/renderWithRouter';
import App from './App';

test('Test if current path is "/"', () => {
  const { history } = renderWithRouter(<App />);
  const path = history.location.pathname;
  expect(path).toBe('/');
});
