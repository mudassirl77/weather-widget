import './WeatherIcon.css';

interface WeatherIconProp {
  icon: string;
}

const WeatherIcons: any = {
  '01d': './icons/clear-day.svg',
  '01n': './icons/clear-night.svg',
  '02d': './icons/clear-day.svg',
  '02n': './icons/cloudy.svg',
  '03d': './icons/cloudy.svg',
  '03n': './icons/cloudy.svg',
  '04d': './icons/clear-day.svg',
  '04n': './icons/cloudy.svg',
  '09d': './icons/rain.svg',
  '09n': './icons/rain.svg',
  '10d': './icons/rain.svg',
  '10n': './icons/rain.svg',
  '11d': './icons/thunderstorms.svg',
  '11n': './icons/thunderstorms.svg',
};

function WeatherIcon({ icon }: WeatherIconProp) {
  return (
    <div data-testid="weather-icon" className="weather-icon">
      <img data-testid="icon" src={WeatherIcons[icon]}></img>
    </div>
  );
}

export default WeatherIcon;
