import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store.js'

import {ThemeProvider} from '@material-ui/core/styles'

import theme from './theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme} >
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
,
  document.getElementById('root')
);
