import WeatherIcon from '../weather-icon/WeatherIcon';
import WeatherLabel from '../weather-label/WeatherLabel';
import './WeatherCondition.css';

interface WeatherConditionProps {
  label: string;
  icon: string;
}

function WeatherCondition({ label, icon }: WeatherConditionProps) {
  return (
    <>
      <WeatherIcon icon={icon}></WeatherIcon>
      <WeatherLabel label={label}></WeatherLabel>
    </>
  );
}

export default WeatherCondition;
