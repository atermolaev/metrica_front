import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { sagaMiddleware } from './store'
import saga from './ducks/sagas';

import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from '@chakra-ui/react';

import App from './components/App/App'

sagaMiddleware.run(saga);

const { Button, FormLabel, Input, Heading } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    FormLabel, 
    Input,
    Heading,
  }
})

ReactDOM.render(
  <ChakraBaseProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraBaseProvider>,
  document.getElementById('app')
);
