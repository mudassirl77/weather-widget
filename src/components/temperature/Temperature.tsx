import './Temperature.css';
interface TemperatureProps {
  value: number;
}

function Temperature({ value }: TemperatureProps) {
  return (
    <div data-testid="temperature" className="temperature">
      {Math.floor(value)} °C
    </div>
  );
}

export default Temperature;
