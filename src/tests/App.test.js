import { render, screen, } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('Test of component App', () => {
  // beforeEach(cleanup);
  test('The page should has a title', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
});
