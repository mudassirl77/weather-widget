import ReactDOM from 'react-dom';
import WeatherLabel from './WeatherLabel';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherLabel />, div);
});

it('should render label in uppercase', () => {
  render(<WeatherLabel label='light rain' />);
  const weatherLabel = screen.getByTestId('weather-label');
  expect(weatherLabel).toHaveTextContent('LIGHT RAIN');
});
