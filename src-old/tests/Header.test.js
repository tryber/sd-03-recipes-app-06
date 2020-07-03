import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

afterEach(cleanup);

test('Test if correct icons are displayed in foods page', () => {
  const { getByTestId, history } = renderWithRouter(<App />);
  history.push('/comidas');
  const profileButton = getByTestId('profile-top-btn');
  expect(profileButton).toBeInTheDocument();
  const searchButton = getByTestId('search-top-btn');
  expect(searchButton).toBeInTheDocument();
});

test('Test if correct icons are displayed drinks page', () => {
  const { getByTestId, history } = renderWithRouter(<App />);
  history.push('/bebidas');
  const profileButton = getByTestId('profile-top-btn');
  expect(profileButton).toBeInTheDocument();
  const searchButton = getByTestId('search-top-btn');
  expect(searchButton).toBeInTheDocument();
});

test('Test if correct icons are displayed food explorer page', () => {
  const { getByTestId, history } = renderWithRouter(<App />);
  history.push('/explorar/comidas/area');
  const profileButton = getByTestId('profile-top-btn');
  expect(profileButton).toBeInTheDocument();
  const searchButton = getByTestId('search-top-btn');
  expect(searchButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in profile page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/comidas');
  const profileButton = getByTestId('profile-top-btn');
  fireEvent.click(profileButton);
  const pathname = history.location.pathname;
  expect(pathname).toBe('/perfil');
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(1);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in explorer page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/explorar');
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(1);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in food explorer page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/explorar/comidas');
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(1);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in drink explorer page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/explorar/bebidas');
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(1);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in food ingredients explorer page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/explorar/comidas/ingredientes');
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(1);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in drink ingredients explorer page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/explorar/bebidas/ingredientes');
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(1);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in done recipes page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/receitas-feitas');
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(1);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in favorite recipes page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/receitas-favoritas');
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(1);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if page titles are correct', () => {
  const { getByText, history } = renderWithRouter(<App />);
  history.push('/comidas');
  let title = getByText('Comidas');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');

  history.push('/bebidas');
  title = getByText('Bebidas');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');

  history.push('/explorar');
  title = getByText('Explorar');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');

  history.push('/perfil');
  title = getByText('Perfil');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');

  history.push('/explorar/comidas');
  title = getByText('Explorar Comidas');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');

  history.push('/explorar/bebidas');
  title = getByText('Explorar Bebidas');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');

  history.push('/explorar/comidas/ingredientes');
  title = getByText('Explorar Ingredientes');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');

  history.push('/explorar/bebidas/ingredientes');
  title = getByText('Explorar Ingredientes');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');

  history.push('/explorar/comidas/area');
  title = getByText('Explorar Origem');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');

  history.push('/receitas-feitas');
  title = getByText('Receitas Feitas');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');

  history.push('/receitas-favoritas');
  title = getByText('Receitas Favoritas');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');
});

test('Test if searchBar are working', () => {
  const { getByTestId, queryByTestId, history } = renderWithRouter(<App />);
  history.push('/comidas');
  const searchButton = getByTestId('search-top-btn');
  fireEvent.click(searchButton);
  const searchBar = getByTestId('search-input');
  expect(searchBar).toBeInTheDocument();
  fireEvent.click(searchButton);
  const newSearchBar = queryByTestId('search-input');
  expect(newSearchBar).toBe(null);

});

