 
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'components/AppContainer';
import { Provider } from 'react-redux';
import store from 'store';
import { BrowserRouter } from 'react-router-dom';

import 'styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
