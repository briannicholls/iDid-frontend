import React, {Component} from 'react';
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import {getCurrentUser} from './actions/currentUser.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import BottomNav from './components/BottomNav'

import ActionsContainer from './components/actions/actionsContainer.js'

// import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ViewListIcon from '@material-ui/icons/ViewList';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

class App extends Component {

  componentDidMount = () => {
    this.props.getCurrentUser()
  }

  renderContext = () => {
    //if logged in
    if (Object.keys(this.props.currentUser).length > 1) {
      return (
        <Route path='/' component={BottomNav} />
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
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
