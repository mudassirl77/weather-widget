import ReactDOM from 'react-dom';
import WeatherIcon from './WeatherIcon';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherIcon />, div);
});

it('render with image', () => {
  render(<WeatherIcon />);
  const weatherIcon = screen.getByTestId('weather-icon');
  const image = screen.getByTestId('icon');
  expect(weatherIcon).toContainElement(image);
});
