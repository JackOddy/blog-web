import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, push } from 'react-router-redux';

import { store, history } from './store/configurestore';
import Routes from './routes';
import App from './components/App';

ReactDom.render(
  <Provider store={store}>
    <App>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </App>
  </Provider>,
  document.getElementById('app'),
);
