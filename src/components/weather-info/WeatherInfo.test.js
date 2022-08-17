import ReactDOM from 'react-dom';
import WeatherInfo from './WeatherInfo';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherInfo />, div);
});

it('should render weather info icon', () => {
  render(<WeatherInfo />);
  const infoItem = screen.getByTestId('info-item');
  const infoIcon = screen.getByTestId('info-icon');
  expect(infoItem).toContainElement(infoIcon);
});

it('should render weather info image', () => {
  render(<WeatherInfo />);
  const infoIcon = screen.getByTestId('info-icon');
  const infoImg = screen.getByTestId('info-img');
  expect(infoIcon).toContainElement(infoImg);
});

it('should render weather info label', () => {
  render(<WeatherInfo />);
  const infoItem = screen.getByTestId('info-item');
  const infoLabel = screen.getByTestId('info-label');
  expect(infoItem).toContainElement(infoLabel);
});

it('should render wind unit correctly', () => {
  render(<WeatherInfo label="wind" value="5.43" />);
  const infoValue = screen.getByTestId('info-value');
  expect(infoValue).toHaveTextContent('5.43 km/h');
});

it('should render humidity unit correctly', () => {
  render(<WeatherInfo label="humidity" value="83" />);
  const infoValue = screen.getByTestId('info-value');
  expect(infoValue).toHaveTextContent('83%');
});

it('should render pressure unit correctly', () => {
  render(<WeatherInfo label="pressure" value="1014" />);
  const infoValue = screen.getByTestId('info-value');
  expect(infoValue).toHaveTextContent('1014 mbar');
});
