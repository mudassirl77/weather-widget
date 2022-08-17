import ReactDOM from 'react-dom';
import Header from './Header';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('renders header to contain 3 children', () => {
  render(<Header />);
  const header = screen.getByTestId('header');
  expect(header.children.length).toEqual(3);
});
