import ReactDOM from 'react-dom';
import WeatherInfoContainer from './WeatherInfoContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherInfoContainer />, div);
});
