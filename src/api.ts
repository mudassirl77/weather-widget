export const RAPID_API_KEY = '6142addc01mshb501ff87535f439p1607dejsnf20bd3fbe62a';
export const WEATHER_API_KEY = '578679fda2e67ff1caff0214be56e606';

export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': `${RAPID_API_KEY}`,
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';

