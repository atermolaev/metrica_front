import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { sagaMiddleware } from './store'
import saga from './ducks/sagas';

import App from './components/App/App'

sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('app')
);
