import React, {Component} from 'react';
import {connect} from 'react-redux'

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
import {Route} from 'react-router-dom'
import {fetchCounters} from './actions/counters.js'

//Material UI
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {

  componentDidMount = () => {
    this.props.getCurrentUser()
    this.props.getCurrentState()
    this.props.fetchCounters()
  }

  componentDidUpdate() {

    if (this.props.currentUser.id > 0) {
      // if we're on Action history list, fetch the actions
      if (this.props.currentState === 2) {
        this.props.fetchUserActions(this.props.currentUser.id)
      }
    } else {
      // if user isn't logged in,
      console.log('Not logged in')
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
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </React.Fragment>
    )
  }

  renderMainScreen = () => {
    //if logged in
    if (this.props.currentUser.id > 0) {
      return this.loggedInState()
    } else { // if not logged in
      return this.loggedOutState()
    }
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Container maxWidth="sm" >

          {this.renderMainScreen()}

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

export default connect(mapStateToProps, {getCurrentUser, getCurrentState, fetchUserActions, fetchCounters})(App);
