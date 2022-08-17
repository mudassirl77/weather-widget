import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import { render, fireEvent, screen } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchBar />, div);
});

