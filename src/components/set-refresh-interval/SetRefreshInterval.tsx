import { useContext } from 'react';
import { RefreshIntervalContext } from '../weather-widget/WeatherWidget';
import './SetRefreshInterval.css';

const DEFAULT_INTERVAL_IN_SEC = 30;
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
        value={DEFAULT_INTERVAL_IN_SEC}
        placeholder="Set interval"
        onChange={(element) => handleOnChange(element.target.value)}
      />
    </div>
  );
}

export default SetRefreshInterval;
