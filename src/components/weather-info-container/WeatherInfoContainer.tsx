import './WeatherInfoContainer.css';
import WeatherInfo from '../weather-info/WeatherInfo';

type WeatherInfoContainer = {
  weatherInfo: any;
};

function WeatherInfoContainer({ weatherInfo }: WeatherInfoContainer) {
  const isDay = weatherInfo?.weather[0].icon?.includes('d');
  const getTime = (timeStamp: number) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };
  return (
    <div className="weather-info-container">
      <WeatherInfo
        label={isDay ? 'sunset' : 'sunrise'}
        value={`${getTime(weatherInfo?.sys[isDay ? 'sunset' : 'sunrise'])}`}
      ></WeatherInfo>
      <WeatherInfo label="wind" value={weatherInfo?.wind?.speed}></WeatherInfo>
      <WeatherInfo
        label="humidity"
        value={weatherInfo?.main?.humidity}
      ></WeatherInfo>
      <WeatherInfo
        label="pressure"
        value={weatherInfo?.main?.pressure}
      ></WeatherInfo>
    </div>
  );
}

export default WeatherInfoContainer;
