import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Countries from './Countries';
import store from '../../redux/store';

it('Render banner on screen', () => {
  render(
    <Router>
      <Provider store={store}>
        <Countries />
      </Provider>
    </Router>,
  );
  const banner = document.querySelector('#banner');
  expect(banner).toBeTruthy();
});
