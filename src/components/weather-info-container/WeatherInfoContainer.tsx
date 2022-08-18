import './WeatherInfoContainer.css';
import WeatherInfo from '../weather-info/WeatherInfo';
import { WeatherDetails } from '../weather-widget/weather-widget.interface';

interface WeatherInfoContainer {
  weatherDetails: WeatherDetails;
}

function WeatherInfoContainer({ weatherDetails }: WeatherInfoContainer) {
  const isDay = weatherDetails?.weather[0].icon?.includes('d');
  const getTime = (timeStamp: number) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <div className="weather-info-container">
      <WeatherInfo
        label={isDay ? 'sunset' : 'sunrise'}
        value={`${getTime(weatherDetails?.sys[isDay ? 'sunset' : 'sunrise'])}`}
      ></WeatherInfo>
      <WeatherInfo
        label="wind"
        value={weatherDetails?.wind?.speed}
      ></WeatherInfo>
      <WeatherInfo
        label="humidity"
        value={weatherDetails?.main?.humidity}
      ></WeatherInfo>
      <WeatherInfo
        label="pressure"
        value={weatherDetails?.main?.pressure}
      ></WeatherInfo>
    </div>
  );
}

export default WeatherInfoContainer;
