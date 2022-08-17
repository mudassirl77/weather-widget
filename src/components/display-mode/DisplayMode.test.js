import DisplayMode from './DisplayMode';
import ReactDOM from 'react-dom';
import { fireEvent, render, screen } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayMode />, div);
});
