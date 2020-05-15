import React, {Component} from 'react';
import './App.css';
import Login from './components/Login'
import Logout from './components/Logout.js'
import {getCurrentUser} from './actions/currentUser.js'
//import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        {this.props.currentUser ? <Logout /> : <Login /> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
