import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {Route, withRouter, Switch} from 'react-router-dom'
//components
import UserShow from './components/users/UserShow.js';
import Routines from './components/Routines.js';
import Login from './components/Login'
import Signup from './components/Signup.js'
import ActionFab from './components/ActionFab.js'
import CounterForm from './components/counters/counterForm.js'
import NavContainer from './components/NavContainer'
import ActionForm from './components/actions/actionForm.js'
import ActionsList from './components/actions/actionsList.js';
import Dashboard from './components/dashboard/Dashboard'
//actions
import {getCurrentUser} from './actions/currentUser.js'
import {getCurrentState} from './actions/value.js'
import {fetchUserActions} from './actions/actions.js'
//Material UI
import { MuiThemeProvider } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme';

import './App.css';

export function App({currentUser}) {
  useEffect(() => {
    getCurrentUser()
  })

  const loggedInState = () => {
    return (
      <Box m={2}>
        <Route exact path="/actions/:user_id" component={ActionsList} />
        <Route exact path="/routines" component={Routines} />
        <Route exact path="/actions/new" component={ActionForm} />
        <Route exact path="/counters/new" component={CounterForm} />
        <Route exact path="/user/:id" component={UserShow} />
        <Route path='/' component={ActionFab} />
        <Route exact path='/' component={Dashboard} />
        <Route path='/' component={NavContainer} />
      </Box>
    )
  }

  const loggedOutState = () => {
    return (
      <Switch>
        <Route exact path='/signup' component={Signup} />
        <Route path='/' component={Login} />
      </Switch>
    )
  }

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {currentUser.id ? loggedInState() : loggedOutState()}
    </MuiThemeProvider>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentState: state.value
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getCurrentState, fetchUserActions})(App))
