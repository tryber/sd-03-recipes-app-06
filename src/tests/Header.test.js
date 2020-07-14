import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent, getNodeText, waitForElementToBeRemoved } from '@testing-library/react';
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

test('Test if correct icons are displayed food explorer page', async () => {
  const { getByTestId, getByText, history } = renderWithRouter(<App />);
  history.push('/explorar/comidas/area');
  await waitForElementToBeRemoved(() => getByText('Carregando ...'))
  .then(() => {
    console.log('Element no longer in DOM')
    const profileButton = getByTestId('profile-top-btn');
    expect(profileButton).toBeInTheDocument();
    const searchButton = getByTestId('search-top-btn');
    expect(searchButton).toBeInTheDocument();
  })
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
  expect(buttons.length).toBe(3);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in food explorer page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/explorar/comidas');
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(4);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in drink explorer page', () => {
  const { getByTestId, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/explorar/bebidas');
  const buttons = getAllByRole('button');
  expect(buttons.length).toBe(3);
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if correct icons are displayed in food ingredients explorer page', async () => {
  const { getByTestId, getByText, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/explorar/comidas/ingredientes');
  await waitForElementToBeRemoved(() => getByText('Loading...'))
  .then(() => {
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(1);
    const newProfileButton = getByTestId('profile-top-btn');
    expect(newProfileButton).toBeInTheDocument();
  })
});

test('Test if correct icons are displayed in drink ingredients explorer page', async () => {
  const { getByTestId, getByText, getAllByRole, history } = renderWithRouter(<App />);
  history.push('/explorar/bebidas/ingredientes');
  await waitForElementToBeRemoved(() => getByText('Loading...'))
  .then(() => {
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(1);
    const newProfileButton = getByTestId('profile-top-btn');
    expect(newProfileButton).toBeInTheDocument();
  })
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
  const { getByTestId, history } = renderWithRouter(<App />);
  history.push('/receitas-favoritas');
  const newProfileButton = getByTestId('profile-top-btn');
  expect(newProfileButton).toBeInTheDocument();
});

test('Test if page titles are correct', async () => {
  const { getByText, getByTestId, history } = renderWithRouter(<App />);
  history.push('/comidas');
  let title = getByTestId('page-title');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');
  expect(getNodeText(title)).toBe('Comidas');

  history.push('/bebidas');
  title = getByTestId('page-title');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');
  expect(getNodeText(title)).toBe('Bebidas');

  history.push('/explorar');
  title = getByTestId('page-title');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');
  expect(getNodeText(title)).toBe('Explorar');

  history.push('/perfil');
  title = getByTestId('page-title');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');
  expect(getNodeText(title)).toBe('Perfil');

  history.push('/explorar/comidas');
  title = getByTestId('page-title');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');
  expect(getNodeText(title)).toBe('Explorar Comidas');

  history.push('/explorar/bebidas');
  title = getByTestId('page-title');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');
  expect(getNodeText(title)).toBe('Explorar Bebidas');

  history.push('/explorar/comidas/ingredientes');
  await waitForElementToBeRemoved(() => getByText('Loading...'))
  .then(() => {
    title = getByTestId('page-title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H1');
    expect(getNodeText(title)).toBe('Explorar Ingredientes');
  })
  
  history.push('/explorar/bebidas/ingredientes');
  title = getByTestId('page-title');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');
  expect(getNodeText(title)).toBe('Explorar Ingredientes');

  history.push('/explorar/comidas/area');
  await waitForElementToBeRemoved(() => getByText('Carregando ...'))
  .then(() => {
    title = getByTestId('page-title');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H1');
    expect(getNodeText(title)).toBe('Explorar Origem');
  })

  history.push('/receitas-feitas');
  title = getByTestId('page-title');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');
  expect(getNodeText(title)).toBe('Receitas Feitas');

  history.push('/receitas-favoritas');
  title = getByTestId('page-title');
  expect(title).toBeInTheDocument();
  expect(title.tagName).toBe('H1');
  expect(getNodeText(title)).toBe('Receitas Favoritas');
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
