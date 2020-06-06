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
//actions
import {getCurrentUser} from './actions/currentUser.js'
import {getCurrentState} from './actions/value.js'
import {fetchUserActions} from './actions/actions.js'
import {fetchCounters} from './actions/counters.js'

import {withStyles} from '@material-ui/core/styles'

//Material UI
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = theme => ({
  // '@global': {
  //   'html, body, #root': {
  //     height: 'calc(100% - 10px)',
  //     marginTop: '5px'
  //   },
  // }
  app: {

  },
  main: {
  },
  footer: {
    position: 'static',
  },
})

export function App({classes, currentUser, fetchCounters}) {

  useEffect(() => {
      fetchCounters()
      getCurrentUser()
    }, [])

  const loggedInState = () => {
    return (
      <React.Fragment>

        <Container className={classes.main}>
          <Route exact path="/actions" component={ActionsContainer} />
          <Route exact path="/actions/new" component={ActionForm} />
          <Route exact path="/counters/new" component={CounterForm} />
          <Route path='/' component={ActionFab} />
        </Container>

        <footer className={classes.footer}>
          <Route path='/' component={NavContainer} />
        </footer>
      </React.Fragment>
    )
  }

  const loggedOutState = () => {
    return (
      <React.Fragment >
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route path='/' component={Login} />
        </Switch>
      </React.Fragment>
    )
  }

    return (
      <Container className="app"  >
        <CssBaseline />
        <Container className={classes.app} maxWidth="sm" >

          {currentUser.id ? loggedInState() : loggedOutState()}

        </Container>
      </Container>
    )

}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentState: state.value
  }
}

export default withStyles(useStyles)(withRouter(connect(mapStateToProps, {getCurrentUser, getCurrentState, fetchUserActions, fetchCounters})(App)))
