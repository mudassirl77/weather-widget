import ReactDOM from 'react-dom';
import WeatherWidget from './WeatherWidget';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherWidget />, div);
});
