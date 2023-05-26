import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import PageItems from '../pages/PageItems';

describe('testing PageItems component', () => {
  it('should render the PageItems component', () => {
    const paginatedItems = render(
      <Provider store={store}>
        <BrowserRouter>
          <PageItems />
        </BrowserRouter>
      </Provider>,
    );
    expect(paginatedItems).toMatchSnapshot();
  });
});
