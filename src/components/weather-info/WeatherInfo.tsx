import './WeatherInfo.css';

type WeatherInfoProps = {
  label: string;
  value: string;
};
const weatherInfoIcons: any = {
  sunrise: './icons/sunrise.svg',
  sunset: './icons/sunset.svg',
  wind: './icons/wind.svg',
  humidity: './icons/humidity.svg',
  pressure: './icons/pressure.svg',
};

function WeatherInfo({ label, value }: WeatherInfoProps) {
  let valueWithUnit;
  switch (label) {
    case 'wind':
      valueWithUnit = `${value} km/h`;
      break;
    case 'humidity':
      valueWithUnit = `${value}%`;
      break;
    case 'pressure':
      valueWithUnit = `${value} mbar`;
      break;

    default:
      valueWithUnit = value;
      break;
  }
  return (
    <div data-testid="info-item" className="weather-info-item">
      <span data-testid="info-icon" className="weather-info-item-icon">
        <img
          data-testid="info-img"
          src={weatherInfoIcons[label]}
          alt={weatherInfoIcons[label]}
        ></img>
      </span>
      <span data-testid="info-label" className="weather-info-item-label">
        {label?.toUpperCase()}
        <div data-testid="info-value">{valueWithUnit}</div>
      </span>
    </div>
  );
}

export default WeatherInfo;
