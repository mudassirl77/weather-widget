export interface WeatherDetails {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  city?: string;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface IThemeContext {
  theme: string;
  toggleTheme: () => void;
}

export interface SearchState {
  value: {
    latitude: number;
    longitude: number;
  };
  label: string;
}

export interface ISearchContext {
  search: SearchState | undefined;
  setSearch: React.Dispatch<React.SetStateAction<SearchState | undefined>>;
}

export interface IRefreshIntervalContext {
  refreshInterval: number;
  setRefreshInterval: React.Dispatch<React.SetStateAction<number>>;
}
