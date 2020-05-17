import React, {Component} from 'react';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup.js'
import {getCurrentUser} from './actions/currentUser.js'
import {getCurrentState} from './actions/value.js'
import {fetchUserActions} from './actions/actions.js'
import {connect} from 'react-redux'
import NavContainer from './components/NavContainer'
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom'
import ActionForm from './components/actions/actionForm.js'
import {fetchCounters} from './actions/counters.js'


import ActionsContainer from './components/actions/actionsContainer.js'

import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {

  componentDidMount = () => {
    this.props.getCurrentUser()
    this.props.getCurrentState()
    this.props.fetchCounters()
  }

  componentDidUpdate() {
    console.log('App update. state = ' + this.props.currentState)
    if (this.props.currentState == 2) {
      console.log('state is two, fetching user actions')
      //console.log(this.props.currentUser)
      this.props.fetchUserActions(this.props.currentUser.id)
    }
  }

  renderMainScreen = () => {
    if (this.props.currentUser.id > 0) {
      return (
        <>
        <Route exact path="/actions" component={ActionsContainer} />
        <Route exact path="/actions/new" component={ActionForm} />
        <Route path='/' component={NavContainer}  />
        </>
      )
    } else {
      return (
        <>
        <Route path='/' component={Login} />
        <Route path='/signup' component={Signup} />
        </>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <CssBaseline />

        {this.renderMainScreen()}

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

export default withRouter(connect(mapStateToProps, {getCurrentUser, getCurrentState, fetchUserActions, fetchCounters})(App));
