import DisplayMode from '../display-mode/DisplayMode';
import SearchBar from '../search-bar/SearchBar';
import SetRefreshInterval from '../set-refresh-interval/SetRefreshInterval';
import './Header.css';

function Header() {
  return (
    <div data-testid='header' className="header">
      <span>
        <SearchBar></SearchBar>
      </span>
      <span>
        <SetRefreshInterval></SetRefreshInterval>
      </span>
      <span>
        <DisplayMode></DisplayMode>
      </span>
    </div>
  );
}

export default Header;
