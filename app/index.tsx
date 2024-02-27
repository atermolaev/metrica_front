import React from 'react';
import { createRoot } from 'react-dom/client';
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

const root = createRoot(document.getElementById('app') as Element);

root.render(
  <ChakraBaseProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraBaseProvider>
);
