import React, {Component} from 'react';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup.js'
import {getCurrentUser} from './actions/currentUser.js'
import {getCurrentState} from './actions/value.js'
import {fetchUserActions} from './actions/actions.js'
import {connect} from 'react-redux'
import NavContainer from './components/NavContainer'
import {Route, withRouter} from 'react-router-dom'
import ActionForm from './components/actions/actionForm.js'
import {fetchCounters} from './actions/counters.js'
import Container from '@material-ui/core/Container';

// import { positions } from '@material-ui/system';
import ActionFab from './components/ActionFab.js'


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
    if (this.props.currentUser.id > 0) { //if logged in
      return (
        <>
      <Route exact path="/actions" component={ActionsContainer} />
      <Route exact path="/actions/new" component={ActionForm} />

      <ActionFab />

      <Route path='/' component={NavContainer}  />

        </>
      )
    } else { // if not logged in
      return (
        <>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        </>
      )
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

export default withRouter(connect(mapStateToProps, {getCurrentUser, getCurrentState, fetchUserActions, fetchCounters})(App));
