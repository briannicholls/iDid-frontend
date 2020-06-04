import React, {Component} from 'react';
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

//Material UI
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline'


class App extends Component {

  componentDidMount = () => {
    // if this returns false, not logged in, redirect
    this.props.fetchCounters()
    if (this.props.getCurrentUser() === 'valid') {
      console.log('valid user')

    } else {
      console.log('no valid user')
    }
  }

  loggedInState = () => {
    return (
      <React.Fragment>
        <Route exact path="/actions" component={ActionsContainer} />
        <Route exact path="/actions/new" component={ActionForm} />
        <Route exact path="/counters/new" component={CounterForm} />
        <Route path='/' component={ActionFab} />
        <Route path='/' component={NavContainer} />
      </React.Fragment>
    )
  }

  loggedOutState = () => {
    return (
      <React.Fragment >
        <Switch>
          <Route exact path='/signup' component={Signup} />
          <Route path='/' component={Login} />
        </Switch>
      </React.Fragment>
    )
  }

  render() {
    console.log(1)
    return (
      <div className="App">
        <CssBaseline />
        <Container maxWidth="sm" >

          {this.props.currentUser.id ? this.loggedInState() : this.loggedOutState()}

        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentState: state.value
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser, getCurrentState, fetchUserActions, fetchCounters})(App))
