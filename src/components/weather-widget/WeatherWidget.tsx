import { createContext, useEffect, useState } from 'react';
import Location from '../location/Location';
import Header from '../header/Header';
import Temperature from '../temperature/Temperature';
import './WeatherWidget.css';
import WeatherCondition from '../weather-condition/WeatherCondition';
import WeatherInfoContainer from '../weather-info-container/WeatherInfoContainer';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../../api';
import {
  IRefreshIntervalContext,
  ISearchContext,
  IThemeContext,
  SearchState,
  WeatherDetails,
} from './weather-widget.interface';
import { ErrorBoundary } from '../error-handling/ErrorBoundary';
import ErrorFallback from '../error-handling/ErrorFallback';

export type DisplayMode = 'light' | 'dark';
export const ThemeContext = createContext<IThemeContext>(
  {} as IThemeContext
);
export const SearchContext = createContext<ISearchContext>({} as ISearchContext);
export const RefreshIntervalContext = createContext<IRefreshIntervalContext>({} as IRefreshIntervalContext);
export const DEFAULT_REFRESH_INTERVAL = 30000;

function WeatherWidget() {
  const [theme, setTheme] = useState<DisplayMode>('light');
  const [weatherInfo, setWeatherInfo] = useState<WeatherDetails | null>(null);
  const [search, setSearch] = useState<SearchState>();
  const [refreshInterval, setRefreshInterval] = useState(
    DEFAULT_REFRESH_INTERVAL
  );

  const toggleTheme = () => {
    setTheme((curr: DisplayMode) => (curr === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => fetchWeatherInfo(), [search]);
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
            <ErrorBoundary fallBackComponent={ErrorFallback}>
              <Header></Header>
            </ErrorBoundary>
          </RefreshIntervalContext.Provider>
        </SearchContext.Provider>
        {weatherInfo && (
          <>
            <Location name={weatherInfo?.city || ''}></Location>
            <Temperature value={weatherInfo?.main?.temp || 0}></Temperature>
            <WeatherCondition
              label={weatherInfo?.weather[0].description}
              icon={weatherInfo?.weather[0].icon}
            ></WeatherCondition>
            <WeatherInfoContainer
              weatherDetails={weatherInfo}
            ></WeatherInfoContainer>
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default WeatherWidget;
