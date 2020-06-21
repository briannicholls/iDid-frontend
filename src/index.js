import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

import {Provider} from 'react-redux'
import store from './store.js'

import {MuiThemeProvider} from '@material-ui/core/styles'
// import Container from '@material-ui/core/Container'
// import Grid from '@material-ui/core/Grid'

import theme from './theme'

ReactDOM.render(
  <MuiThemeProvider theme={theme} >
    <Provider store={store}>
        <Router>
          <App  />
        </Router>
    </Provider>
  </MuiThemeProvider>
,
  document.getElementById('root')
);
