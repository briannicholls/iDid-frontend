import React, {Component} from 'react';
import './App.css';
import Login from './components/Login'
import Signup from './components/Signup.js'
import {getCurrentUser} from './actions/currentUser.js'
import {getCurrentState} from './actions/value.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import NavContainer from './components/NavContainer'

import ActionsContainer from './components/actions/actionsContainer.js'

class App extends Component {

  componentDidMount = () => {
    this.props.getCurrentUser()
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

export default connect(mapStateToProps, {getCurrentUser})(App);
