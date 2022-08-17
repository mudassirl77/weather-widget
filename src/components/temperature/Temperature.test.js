import ReactDOM from 'react-dom';
import Temperature from './Temperature';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Temperature />, div);
});

it('renders temperature with degree Celcius', () => {
  render(<Temperature value={24} />);
  const temperature = screen.getByTestId('temperature');
  expect(temperature).toHaveTextContent('24 °C');
});
