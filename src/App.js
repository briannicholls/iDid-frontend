import React, {Component} from 'react';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup.js'
import {getCurrentUser} from './actions/currentUser.js'
import {getCurrentState} from './actions/value.js'
import {fetchUserActions} from './actions/actions.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import NavContainer from './components/NavContainer'

import ActionsContainer from './components/actions/actionsContainer.js'

import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {

  componentDidMount = () => {
    this.props.getCurrentUser()
    this.props.getCurrentState()
  }

  componentDidUpdate() {
    console.log('App update. state = ' + this.props.currentState)
    if (this.props.currentState == 2) {
      console.log('state is two, fetching user actions')
      //console.log(this.props.currentUser)
      this.props.fetchUserActions(this.props.currentUser.id)
    }
  }

  renderContext = () => {
    //if logged in
    if (Object.keys(this.props.currentUser).length > 1) {
      return (
        <Route path='/' component={NavContainer}  />
      )
    } else { //if not logged in, these routes become active
      return (
        <>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup} />
        </>
      )
    }
  }

  renderMainScreen = () => {
    return (
      <Route exact path="/actions" component={ActionsContainer} />
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <CssBaseline />

          {this.renderMainScreen()}

          {this.renderContext()}

        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    currentState: state.value
  }
}

export default connect(mapStateToProps, {getCurrentUser, getCurrentState, fetchUserActions})(App);
