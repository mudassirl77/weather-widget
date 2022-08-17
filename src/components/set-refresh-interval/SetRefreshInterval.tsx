import { useContext } from 'react';
import { RefreshIntervalContext } from '../weather-widget/WeatherWidget';
import './SetRefreshInterval.css';

type RefreshIntervalProps = {
  value: number;
};

function SetRefreshInterval() {
  const refreshIntervalContext = useContext(RefreshIntervalContext);
  const handleOnChange = (value: string) => {
    refreshIntervalContext.setRefreshInterval(+value * 1000);
  };

  return (
    <div className="set-interval">
      <input
        data-testid="set-interval"
        type="number"
        placeholder="Set interval"
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </div>
  );
}

export default SetRefreshInterval;
