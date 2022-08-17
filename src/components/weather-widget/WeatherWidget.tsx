import { createContext, useEffect, useState } from 'react';
import Location from '../location/Location';
import Header from '../header/Header';
import Temperature from '../temperature/Temperature';
import './WeatherWidget.css';
import WeatherCondition from '../weather-condition/WeatherCondition';
import WeatherInfoContainer from '../weather-info-container/WeatherInfoContainer';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../../api';

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);
export const SearchContext = createContext({});
export const RefreshIntervalContext = createContext({});
export const DEFAULT_REFRESH_INTERVAL = 30000;

function WeatherWidget() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  const [weatherInfo, setWeatherInfo] = useState(null);
  const [search, setSearch] = useState<{
    value: {
      latitude: number;
      longitude: number;
    };
    label: string;
  }>();

  const [refreshInterval, setRefreshInterval] = useState(
    DEFAULT_REFRESH_INTERVAL
  );

  useEffect(() => {
    fetchWeatherInfo();
  }, [search]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchWeatherInfo();
    }, refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);

  const fetchWeatherInfo = () => {
    if (search) {
      const weatherInfoFetch = fetch(
        `${WEATHER_API_URL}/weather?lat=${search?.value.latitude}&lon=${search?.value.longitude}&appid=${WEATHER_API_KEY}&units=metric`
      );
      Promise.resolve(weatherInfoFetch)
        .then(async (response) => {
          const weatherResponse = await response.json();

          setWeatherInfo({ city: search?.label, ...weatherResponse });
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme} className="weather-container">
        <SearchContext.Provider value={{ search, setSearch }}>
          <RefreshIntervalContext.Provider
            value={{ refreshInterval, setRefreshInterval }}
          >
            <Header></Header>
          </RefreshIntervalContext.Provider>
        </SearchContext.Provider>
        {weatherInfo && (
          <>
            <Location
              name={weatherInfo?.city}
              country={weatherInfo?.sys?.country}
            ></Location>
            <Temperature value={weatherInfo?.main?.temp || 0}></Temperature>
            <WeatherCondition
              label={weatherInfo?.weather[0].description}
              icon={weatherInfo?.weather[0].icon}
            ></WeatherCondition>
            <WeatherInfoContainer
              weatherInfo={weatherInfo}
            ></WeatherInfoContainer>
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default WeatherWidget;
