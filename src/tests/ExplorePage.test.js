import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

afterEach(cleanup);

test('Test if correct buttons are displayed in explorer page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/explorar');
  const buttons = getAllByRole('button');
  const ProfileButton = getByTestId('profile-top-btn');
  const ExploreFoodButton = getByTestId('explore-food');
  const ExploreDrinkButton = getByTestId('explore-drinks');
  expect(buttons.length).toBe(3);
  expect(ProfileButton).toBeInTheDocument();
  expect(ExploreFoodButton).toBeInTheDocument();
  expect(ExploreDrinkButton).toBeInTheDocument();
});

test('Test if go to correct destination when food-explore button is clicked', () => {
  const { getByTestId, history } = renderWithRouter(<App />);
  history.push('/explorar');
  const ExploreFoodButton = getByTestId('explore-food');
  expect(ExploreFoodButton).toBeInTheDocument();
  fireEvent.click(ExploreFoodButton);
  const path = history.location.pathname;
  expect(path).toBe('/explorar/comidas');
});

test('Test if go to correct destination when drink-explore button is clicked', () => {
  const { getByTestId, history } = renderWithRouter(<App />);
  history.push('/explorar');
  const ExploreDrinkButton = getByTestId('explore-drinks');
  expect(ExploreDrinkButton).toBeInTheDocument();
  fireEvent.click(ExploreDrinkButton);
  const path = history.location.pathname;
  expect(path).toBe('/explorar/bebidas');
});
