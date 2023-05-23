import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import AirDetail from '../components/AirDetail';

describe('testing airDetail component', () => {
  it('should render the airDetail component', () => {
    const airDetail = render(
      <Provider store={store}>
        <BrowserRouter>
          <AirDetail />
        </BrowserRouter>
      </Provider>,
    );
    expect(airDetail).toMatchSnapshot();
  });
});
