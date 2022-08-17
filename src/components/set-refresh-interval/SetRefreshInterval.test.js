import ReactDOM from 'react-dom';
import SetRefreshInterval from './SetRefreshInterval';
import { render, screen } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SetRefreshInterval />, div);
});

it('renders with correct placeholder', () => {
  render(<SetRefreshInterval />);
  const setIntervalInput = screen.getByTestId('set-interval');
  expect(setIntervalInput.placeholder).toEqual('Set interval');
});
