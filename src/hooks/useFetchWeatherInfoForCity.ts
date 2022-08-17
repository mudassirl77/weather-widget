import { useEffect, useState } from 'react';

const useFetchWeatherInfoForCity = (lat: string, lon: string) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=578679fda2e67ff1caff0214be56e606`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return [data];
};
export default useFetchWeatherInfoForCity;
