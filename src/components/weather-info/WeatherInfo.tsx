import './WeatherInfo.css';

interface WeatherInfoProps {
  label: string;
  value: string | number;
}

enum WeatherType {
  Wind = 'wind',
  Humidity = 'humidity',
  Pressure = 'pressure',
}

enum Unit {
  WindSpeed = 'km/h',
  Humidity = '%',
  Pressure = 'mbar',
}

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
    case WeatherType.Wind:
      valueWithUnit = `${value} ${Unit.WindSpeed}`;
      break;
    case WeatherType.Humidity:
      valueWithUnit = `${value}${Unit.Humidity}`;
      break;
    case WeatherType.Pressure:
      valueWithUnit = `${value} ${Unit.Pressure}`;
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
