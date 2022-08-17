import ReactDOM from 'react-dom';
import WeatherCondition from './WeatherCondition';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherCondition />, div);
});
