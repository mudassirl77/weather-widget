import './WeatherLabel.css';

type WeatherLabelProps = {
  label: string;
};

function WeatherLabel({ label }: WeatherLabelProps) {
  return <div data-testid='weather-label' className="weather-label">{label?.toUpperCase()}</div>;
}

export default WeatherLabel;
