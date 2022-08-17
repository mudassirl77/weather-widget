import { useEffect, useState } from 'react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6142addc01mshb501ff87535f439p1607dejsnf20bd3fbe62a',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

const usFetchCities = (searchString: string) => {
  const [data, setData] = useState<{ options: any } | null>(null);
  useEffect(() => {
    fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${searchString}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setData({
          options: response.data.map((city) => {
            return {
              value: city.name,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        });
        return [data];
      })
      .catch((err) => console.error(err));
  }, []);
  return [data];
};
export default usFetchCities;
