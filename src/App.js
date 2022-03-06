import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {Route, withRouter, Switch} from 'react-router-dom'
import './App.css';
//components
import Login from './components/Login'
import Signup from './components/Signup.js'
import ActionFab from './components/ActionFab.js'
import ActionsContainer from './components/actions/actionsContainer.js'
import CounterForm from './components/counters/counterForm.js'
import NavContainer from './components/NavContainer'
import ActionForm from './components/actions/actionForm.js'
import Dashboard from './components/dashboard/Dashboard'
//actions
import {getCurrentUser} from './actions/currentUser.js'
import {getCurrentState} from './actions/value.js'
import {fetchUserActions} from './actions/actions.js'

import {makeStyles} from '@material-ui/core/styles'

//Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '0px',
    paddingBottom: '50px'
  },
  stickyBottom: {
    position: 'fixed',
    bottom: '0px',
  },
}));

export function App({currentUser}) {
  const classes = useStyles();

  useEffect(() => {
    getCurrentUser()
  })

  const loggedInState = () => {
    return (
      <>

        <Route exact path="/actions" component={ActionsContainer} />
        <Route exact path="/actions/new" component={ActionForm} />
        <Route exact path="/counters/new" component={CounterForm} />
        <Route path='/' component={ActionFab} />
        <Route exact path='/' component={Dashboard} />

        <Container className={classes.stickyBottom}>
          <Route path='/' component={NavContainer} />
        </Container>

      </>
    )
  }

  const loggedOutState = () => {
    return (
      < >
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route path='/' component={Login} />
        </Switch>
      </>
    )
  }

  return (
    <div className={classes.root} >
      <CssBaseline />
      {currentUser.id ? loggedInState() : loggedOutState()}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentState: state.value
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getCurrentState, fetchUserActions})(App))
