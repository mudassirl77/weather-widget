import { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../weather-widget/WeatherWidget';
import './DisplayMode.css';

function DisplayMode() {
  const themeContext = useContext(ThemeContext);
  return (
    <div data-testid="switch" className="switch">
      <ReactSwitch
        height={20}
        width={40}
        onChange={themeContext.toggleTheme}
        checked={themeContext.theme === 'dark'}
      />
    </div>
  );
}

export default DisplayMode;
