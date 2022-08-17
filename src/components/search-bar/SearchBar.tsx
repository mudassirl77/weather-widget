import { useContext, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';
import { SearchContext } from '../weather-widget/WeatherWidget';
import './SearchBar.css';

type SearchContextType = {
  search: string;
  setSearch: Function;
};

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const searchContext: SearchContextType = useContext(SearchContext);
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
        options: cities.data.map((city) => {
          return {
            value: { latitude: city.latitude, longitude: city.longitude },
            label: `${city.name}, ${city.countryCode}`,
          };
        }),
      };
    }
  };

  return (
    <div data-testid='search-bar' className="search-bar">
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
