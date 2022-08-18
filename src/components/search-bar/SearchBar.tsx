import { useContext, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';
import { ISearchContext } from '../weather-widget/weather-widget.interface';
import { SearchContext } from '../weather-widget/WeatherWidget';
import './SearchBar.css';
interface City {
  name: string;
  country: string;
  countryCode: string;
  region: string;
  regionCode: string;
  latitude: number;
  longitude: number;
  population: number;
}

function SearchBar() {
  const [searchInput, setSearchInput] = useState<string>('');
  const searchContext:ISearchContext = useContext(SearchContext);

  const handleOnChange = (searchInput: string) => {
    setSearchInput(searchInput);
    if (searchInput && searchContext) {
      searchContext.setSearch(searchInput);
    }
  };

  const loadOptions = async (inputValue: string) => {
    let cities = [];
    if (inputValue) {
      try {
        const citiesPromise = await fetch(
          `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
          geoApiOptions
        );
        cities = await citiesPromise.json();
      } catch (error) {
        console.log(error);
      }

      return {
        options: cities.data.map((city: City) => {
          return {
            value: { latitude: city.latitude, longitude: city.longitude },
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    }
  };

  return (
    <div data-testid="search-bar" className="search-bar">
      <AsyncPaginate
        placeholder="Search city"
        debounceTimeout={600}
        value={searchInput}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}

export default SearchBar;
